import React from 'react'
import { useLocation } from 'react-router-dom'
import { BannerAdvertisement } from './BannerAdvertisement'
import { GalleryCard } from './GalleryCard'

export const GalleryCategory = () => {

    const location = useLocation()
    console.log(location.state)
    return (<>
        <div className='container'>

            <div className='row d-flex gallery-card'>
                <BannerAdvertisement/>
                <h4 style={{marginLeft: '25px'}}>GALLERY</h4>
               
                {location.state.message.map((item, index) => {
               
                    return <GalleryCard data={item} key={index}/>
                })
                }
            </div>
        </div>
    </>
   
  )
}
