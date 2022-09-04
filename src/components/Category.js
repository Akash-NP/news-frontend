import React,{useState,useEffect} from "react";
import Grid from '@mui/material/Grid';
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { TiBusinessCard } from "react-icons/ti";
import { Outlet, useNavigate } from "react-router-dom";


export default function Category() {

  const [news, setNews] = useState([])
  
    let filteredNews = news.filter((item) => {
   return item.category!=="youtube"  && item.category!== "whatsapp" && item.category!== "e-paper"
 })
console.log(news)

    useEffect(() => {
    fetch('http://15.206.72.106:4000/api')
  .then((response) => response.json())
  .then((data) => setNews(data));
    }, [])
  
  
  
  const keralaNews=news.filter((singleNews, index) => {
    return singleNews.category==="kerala"
  })
  const nationalNews=news.filter((singleNews, index) => {
    return singleNews.category==="national"
  })
  const whatsappNews=news.filter((singleNews, index) => {
    return singleNews.category==="whatsapp"
  })
  const youtubeNews=news.filter((singleNews, index) => {
    return singleNews.category==="youtube"
  })
  const interNational=news.filter((singleNews, index) => {
    return singleNews.category==="international"
  })
  const interviewNews=news.filter((singleNews, index) => {
    return singleNews.category==="interview"
  })
  const crimeNews=news.filter((singleNews, index) => {
    return singleNews.category==="crime"
  })
  const vellithiraNews=news.filter((singleNews, index) => {
    return singleNews.category==="vellithira"
  })

  
  let navigate = useNavigate();
  const redirectToYotube = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/youtube`;
    navigate(path,{state:{message:youtubeNews}});
  }
  const redirectToEpaper = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/epaper`;
    navigate(path,{state:{message:"e-paper is here"}});
  }
  const redirectToHome = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/`;
    navigate(path,{state:{message:"home is here"}});
  }
  const redirectToKeralaNews = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/keralaNews`;
    navigate(path,{state:{news:keralaNews,allNews:filteredNews}});
  }



  const redirectToNationalNews = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/nationalNews`;
    navigate(path,{state:{news:nationalNews,allNews:filteredNews}});
  }
  const redirectToInterNationalNews = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/internationalNews`;
    navigate(path,{state:{news:interNational,allNews:filteredNews}});
  }
  const redirectToWhatsapp = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/gallery`;
    navigate(path,{state:{message:whatsappNews}});
  }
  const redirectToInterviews = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/interviews`;
    navigate(path,{state:{news:interviewNews,allNews:filteredNews}});
  }
  const redirectToVellithira = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/vellithira`;
    navigate(path,{state:{news:vellithiraNews,allNews:filteredNews}});
  }
  const redirectToCrime = (event) => { 
    console.log('You clicked Button event' + event);
    let path = `/crime`;
    navigate(path,{state:{news:crimeNews,allNews:filteredNews}});
  }
    return (
      <>
    
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          
        >
             <Button color="inherit" onClick={event => redirectToHome(event)}>Home</Button>
        <Button color="inherit" onClick={event => redirectToKeralaNews(event)}>Kerala</Button>
        <Button color="inherit" onClick={event => redirectToNationalNews(event)}>National</Button>
        <Button color="inherit" onClick={event => redirectToInterNationalNews(event)}>International</Button>
        <Button color="inherit" onClick={event => redirectToEpaper(event)}>E-paper</Button>
        <Button color="inherit" onClick={event => redirectToInterviews(event)}>Interviews</Button>
        <Button color="inherit" onClick={event => redirectToVellithira(event)}>Vellithira</Button>
        <Button color="inherit" onClick={event => redirectToWhatsapp(event)}>Gallery</Button>
        <Button color="inherit" onClick={event => redirectToCrime(event)}>Crime</Button>
        <Button color="inherit" onClick={event => redirectToYotube(event)}>Youtube</Button>
        </Grid>
       
       
      </Toolbar>
            </AppBar>
            <Outlet/>
            </>
  );
}