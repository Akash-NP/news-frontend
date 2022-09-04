import React from 'react'
import { BannerAdvertisement } from './BannerAdvertisement'
import LargeAddCard from './LargeAddCard'
import LargeCard from './LargeCard'
import { SmallCard } from './SmallCard'

export const HomeCategoryLayoutTwo = ({data}) => {

    const finalArrayOne = data.reduce((total, data) => {
        if (total.length < 4) {
            if (data.category === "international"){
                total.push(data)
                    }
        }
        return total
    }, [])
    
    console.log(finalArrayOne)
    const finalArrayTwo = data.reduce((total, data) => {
        if (total.length < 4) {
            if (data.category === "vellithira"){
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
                  <LargeCard title="INTERNATIONAL" data={finalArrayOne[0]} />
                     {finalArrayOne.map((item, index) => {
                      if (index > 0) {
                          
                          return <SmallCard data={item}  key={index} />
                      }
                  })}
          </div>
              <div className='col-md-4'>
                  <LargeCard title='VELLITHIRA' data={finalArrayTwo[0]} />
                       {finalArrayTwo.map((item, index) => {
                      if (index > 0) {
                          
                          return <SmallCard data={item} key={index} />
                      }
                  })}
              </div>
              {/* ADD SCREEN */}
              <div className='col-md-4' >
                 <LargeAddCard title='Ad'/>
                 <LargeAddCard />
                  
          </div>
      </div>
          
          <hr />
          
   </div>
      
      
      
  )
}
