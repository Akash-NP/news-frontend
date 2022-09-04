import React from 'react'
import { BannerAdvertisement } from './BannerAdvertisement'
import LargeCard from './LargeCard'
import { SmallCard } from './SmallCard'

export const Layout = ({ data }) => {


    const selectedNewsDetails = (i)=>{
        console.log(i)
        
    }
    
//   const [news, setNews] = useState([])
  


        let filteredNews = data.filter((item) => {
            return item.category!=="youtube"  && item.category!== "whatsapp" && item.category!== "e-paper"
        })
        
        
            const finalArray = filteredNews.reduce((total, data) => {
                if (total.length < 11) {
                    total.push(data)
                }
                return total
            }, [])
    



    return (<div className='container '>
        <div className='row'>
            
      <BannerAdvertisement/>
    </div>

        <h4>TOP NEWS</h4>
         <hr />
        <span></span>
        <div className='row'> 
            <div className='col-md-4 col-lg-4'>

         <LargeCard data={finalArray[0]}/>
            </div>
            <div className='col-md-8 col-lg-8'>
                <div className='row'>
                    <div className='col-md-6'>
                        {finalArray.map((item, index) => {
                            if (index < 5) {
                            return <SmallCard data={finalArray[index]}key={index}  onClick={()=>selectedNewsDetails(index)} />
                                
                            }
                        })}
                         
                       
        
                    </div>
                    <div className='col-md-6'>
                              {finalArray.map((item, index) => {
                            if (index>5) {
                            return <SmallCard key={index}  data={finalArray[index]}  />
                                
                            }
                        })}
                         

                    </div>
                </div>

       
            </div>
            
        </div>
         <hr />
        
    </div>
    
  )
}   
