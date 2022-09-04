import React from 'react'
import { useLocation } from 'react-router-dom'
import { BannerAdvertisement } from './BannerAdvertisement'
import { YouTubeCard } from './YouTubeCard'

export const YoutubeCategory = () => {
    const location = useLocation()
    console.log(location.state.message)

    return (<>
       <div className='container'>
            <div className='row d-flex gallery-card'>
                <BannerAdvertisement/>
                 <h4 style={{marginLeft: '25px'}}>YOUTUBE</h4>
                {location.state.message.map((item, index) => {
               
                    return <YouTubeCard data={item} key={index}/>
                })
                }
            </div>
        </div>

  </>
  )
}
