import React, { useEffect,useState } from 'react'
import { AdHeader } from '../components/BannerAdvertisement'
import Category from '../components/Category'
import { CategoryLayout } from '../components/CategoryLayout'
import { HomeCategoryLayoutTwo } from '../components/CategoryLayoutSecond'
import { Header } from '../components/Header'
import { HomeCategoryFourthLayer } from '../components/HomeCategoryFourthLayer'
import { HomeCategoryLayoutThree } from '../components/HomeCategoryLayoutThree'
import LargeCard from '../components/LargeCard'
import { Layout } from '../components/Layout'
import { SmallCard } from '../components/SmallCard'

export const Home = () => {

const [news,setNews]=useState([])

    useEffect(() => {
    fetch('http://15.206.72.106:4000/api')
  .then((response) => response.json())
  .then((data) => setNews(data));
},[])

    
    return (<>
      {/* <Header/>
        <Category  /> */}
        <Layout data={news} />    
      <CategoryLayout data={news} />
      <HomeCategoryLayoutTwo data={news} />
      <HomeCategoryLayoutThree data={news} />
      <HomeCategoryFourthLayer data={news}/>
        
    </>
 
  )
}
