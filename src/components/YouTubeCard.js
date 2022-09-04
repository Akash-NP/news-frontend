import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const YouTubeCard = ({ data }) => {
    

    const selectedNewsDetails = (data)=>{
    }

console.log(data)
    return (<>
    
             <Card  style={{width:'300px',padding:'0px'}} onClick={()=>selectedNewsDetails(data)}>
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
