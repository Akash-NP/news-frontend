import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const GalleryHomeScreenCard = ({ data }) => {
    

 const navigate=useNavigate()
    const selectedNewsDetails = (data)=>{

    let path = `/details`; 
    navigate(path,{state:{data}});

        
    }


    return (<>

    <h4>GALLERY</h4>
    <hr />
    
             <Card  style={{width:'100%',padding:'0px'}} onClick={()=>selectedNewsDetails(data)}>
      <Card.Img variant="top"  src={data ? data?.profileImg: ''}  style={{height:'186px',width:'auto',padding:'10px'}} />
      <Card.Body>
        <Card.Title>{data? data?.headline.slice(0,100):''}</Card.Title>
        {/* <Card.Text>{data? data?.content.slice(0,150):''}...</Card.Text> */}
    </Card.Body>
        </Card>
    </>
    
  )
}
