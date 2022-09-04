import React,{useEffect,useState} from 'react'
import { Footer } from '../pages/Footer'
import Category from './Category'
import { Header } from './Header'



export const WithNav = () => {
    return (<>
        <Header></Header>
      <Category />
      <Footer/>
    </>
   
  )
}
