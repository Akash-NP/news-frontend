import React from 'react'
import { BannerAdvertisement } from './BannerAdvertisement'
import { GalleryCard } from './GalleryCard'
import { GalleryHomeScreenCard } from './GalleryHomeScreenCardComponent'
import { HomeScreenYoutubeCard } from './HomeScreenYoutubeCardComponent'
import LargeAddCard from './LargeAddCard'
import LargeCard from './LargeCard'
import { SmallCard } from './SmallCard'
import { YouTubeCard } from './YouTubeCard'
import { YoutubeSmallCard } from './YoutubeSmallCardComponent'

export const HomeCategoryFourthLayer= ({data}) => {

    const finalArrayOne = data.reduce((total, data) => {
        if (total.length < 4) {
            if (data.category === "whatsapp"){
                total.push(data)
                    }
        }
        return total
    }, [])
    
    console.log(finalArrayOne)
    const finalArrayTwo = data.reduce((total, data) => {
        if (total.length < 4) {
            if (data.category === "youtube"){
                total.push(data)
                    }
        }
        return total
    }, [])

    console.log(finalArrayTwo)





  return (
      <div className='container'>
          <div className='row'>
              <BannerAdvertisement/>
          </div>
        
      <div className='row'>
              <div className='col-md-4'>
                  <GalleryHomeScreenCard  data={finalArrayOne[0]}/>
                  {/* <LargeCard title="GALLERY" data={finalArrayOne[0]} /> */}
                      {finalArrayOne.map((item, index) => {
                      if (index > 0) {
                          
                          return <SmallCard data={item} key={index} />
                      }
                  })}
          </div>
              <div className='col-md-4'>
                  <HomeScreenYoutubeCard  data={finalArrayTwo[0]} />
                  {/* <LargeCard title='YOUTUBE' data={finalArrayTwo[0]} /> */}
                    {finalArrayTwo.map((item, index) => {
                      if (index > 0) {
                          
                          return <YoutubeSmallCard data={item} key={index} />
                      }
                  })}
              </div>
              {/* ADD SCREEN */}
              <div className='col-md-4' >
                 <LargeAddCard title='Ad'/>
                 <LargeAddCard/>
                  
          </div>
      </div>
         
          {/* <hr /> */}
          
   </div>
      
      
      
  )
}
