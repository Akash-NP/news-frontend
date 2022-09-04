import React from 'react'
import { CategoryNewsCard } from './CategoryNewsCard'
import { SmallCard } from './SmallCard'

export const CategoryNews = ({data}) => {


    return (<>
        {/* Send 10 data */}
        {data.map((item,index) => {
            return  <CategoryNewsCard key={index}  data={item}/>
        })}
       
    </>
   
  )
}
