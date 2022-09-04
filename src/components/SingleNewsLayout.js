import React from 'react'
import { useLocation } from 'react-router-dom';
import CategoryLatestNews from './CategoryLatestNews';
import { LatestNews } from './LatestNews'
import { SingleNewsContent } from './SingleNewsContent'
import { useState,useEffect } from 'react';


export const SingleNewsLayout = ({ props }) => {
        const [news,setNews]=useState([])
    useEffect(() => {
    fetch('http://15.206.72.106:4000/api')
  .then((response) => response.json())
  .then((data) => setNews(data));
    }, [])
  let filteredNews = news.filter((item) => {
   return item.category!=="youtube"  && item.category!== "whatsapp" && item.category!== "e-paper"
 })
  console.log(filteredNews)




    const location = useLocation();
    // console.log("dataa",location)    
    return (<>
        <div className='container'>

        <div className='row'>
            <div className='col-md-9'>
                    <SingleNewsContent data={ location.state} />
            </div>
            <div className='col-md-3'>
                    <CategoryLatestNews data={filteredNews} />
            </div>
            </div>
        </div>
            
        




    </>
    
  )
}
