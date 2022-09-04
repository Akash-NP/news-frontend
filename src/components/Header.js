// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { TiBusinessCard } from "react-icons/ti";
import {FcNews} from 'react-icons/fc'
import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import useWindowDimensions from "../utils/DisplayResolution";

export const Header = () => {
const [isMobile,setIsMobile]=useState(false)
  const { height, width } = useWindowDimensions();
    useEffect(() => {
          if (width < 500) {
        setIsMobile(true)
        }
          else {
              setIsMobile(false)
        }
    },[width])
  
  return (<>
   <AppBar position="static">
        <Toolbar>
        <img src={require('../assets/Grunge_Metallic_Text_Effect.jpg')} style={{height:'40px',width:'60px'}}/>
        {/* <FcNews size={40} /> */}
          <Typography variant="h4"
            component="div" sx={{ flexGrow: 1 }}>
            Nireekshanam
          </Typography>
   
        {!isMobile && <h4>{ new Date().toISOString().split('T')[0] }</h4>}
        </Toolbar>
      </AppBar>
      </>
  )
}

