import React,{useState,useEffect} from 'react'
import Header from './Header'
import Category from './Category'
import {displayImg} from '../utils/imageConverter'
import { BannerAdvertisement } from './BannerAdvertisement'

function Epaper() {

const [news,setNews]=useState([])

   useEffect(() => {
    fetch('http://15.206.72.106:4000/api')
  .then((response) => response.json())
  .then((data) => setNews(data));
    }, [])


    let ePaperArray = news.filter((item) => {
     return item.category ==="e-paper"
        
    })

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(displayImg(ePaperArray[0].profileImg)).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
  return (
    <>
          <div className='container text-center'>
              <div className='row'>
                  <BannerAdvertisement/>
              </div>

              {/* style={{marginBottom:'333px'}} */}
              
                <button onClick={onButtonClick}className='btn btn-small btn-secondary'  >
                    Download Todays News
                </button>
</div>
                

    </>
  )
}

export default Epaper