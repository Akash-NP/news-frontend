import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const HomeScreenYoutubeCard = ({ data }) => {
    
const navigate=useNavigate()
    const selectedNewsDetails = (data) => {
            let path = `/videoDetails`; 
    navigate(path,{state:{data}});
        
    }

    return (<>

    <h4>YOUTUBE</h4>
    <hr />
    
             <Card  style={{width:'auto',padding:'0px'}} onClick={()=>selectedNewsDetails(data)}>
            {/* <Card.Img variant="top"  src={data ? data?.profileImg: ''}  style={{height:'186px',width:'300px',padding:'10px'}} /> */}
             <iframe
                src={`https://www.youtube.com/embed/${data?.youtubeVideoId}`}
        frameborder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen
        title="video"
        
      />
      <Card.Body>
        <Card.Title>{data? data?.headline.slice(0,100):''}</Card.Title>
        <Card.Text>{data? data?.content.slice(0,150):''}...
                    
        </Card.Text>
    </Card.Body>
        </Card>
    </>
    
  )
}
