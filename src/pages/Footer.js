import { Link } from '@mui/material'
import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
export const Footer = () => {
    return (<>
        <div className='container color-schema footer' >

            <div className='row'>
                <div className='col-md-5'>
                           <h4>About Us</h4>
                    <p>Nireekshanam, Plot No 102<br/> 
                        Trivandrum, Kerala, 410206<br/> 
                        02255900882</p>

                </div>
                <div className='col-md-4'>
                    <h4>Bank Account Details</h4>
                    <p>
                        Bank Name - Dhanlaxmi Bank   <br/> 
                        Branch - Trivandrum Fort<br/> 
                        Account no - 005700100184960<br/> 
                        IFSC - DLXB0000057<br/>  
                    </p>
                    
                </div>
                <div className='col-md-3 d-flex justify-content-between align-items-center '>
                  <Link href="http://facebook.com" target="_blank" >  <AiFillFacebook className='social-media-icon-fb' size={30}  /></Link>
                  <Link href="http://instagram.com" target="_blank" > <BsInstagram className='social-media-icon-instagram' size={30} /></Link>
                  <Link href="http://twitter.com"  target="_blank"> <FaTwitterSquare className='social-media-icon-twitter' size={30}/></Link>
                    
                 
                    
                </div>
            </div>

        </div>
    </>
    
  )
}
