import React from 'react'
import { useNavigate } from 'react-router-dom'
import {displayImg} from '../utils/imageConverter'

export const YoutubeSmallCard = ({ navTitle, data }) => {
    
    const navigate=useNavigate()
    const selectedNewsDetails = (data)=>{

    let path = `/videoDetails`; 
    navigate(path,{state:{data}});

        
    }
    return (<div className='container topMargin' onClick={()=>selectedNewsDetails(data)}>
        
<div className="card small-card d-flex flex-row smallCard">
           <iframe
                src={`https://www.youtube.com/embed/${data?.youtubeVideoId}`}
        frameborder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen
                title="video"
                 style={{height:'70px',width:'130px',marginRight:'4px'}}
        
      />
  <div className="card-small" >
                <p className="card-text">{data ? data?.headline.slice(0,100) :''}...</p>
            </div>
</div>
      
<h4 className='txt-url'>{navTitle?navTitle:''}</h4>

        </div>)
    

}
