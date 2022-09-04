import React from 'react'
import { useLocation } from 'react-router-dom'
import { BannerAdvertisement } from './BannerAdvertisement'
import  CategoryLatestNews from './CategoryLatestNews'
import { CategoryNews } from './CategoryNews'

export const VellithiraCategory = () => {
    const location=useLocation()
    // console.log(location)
    let categoryType="VELLITHIRA"
    return (    <div className='container'>

        <div className='row'>
            <BannerAdvertisement/>
            <div className='col-md-8'>
                <h4>{ categoryType}</h4>
                <CategoryNews data={location.state.news} />
                {/* <button className='btn btn-primary'>Load More</button> */}
            </div>
            <div className='col-md-4'>
                <CategoryLatestNews data={location.state.allNews}  />
            </div>
            </div>
        </div>
  )
}
