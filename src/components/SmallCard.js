import React from 'react'
import { useNavigate } from 'react-router-dom'
import {displayImg} from '../utils/imageConverter'

export const SmallCard = ({ navTitle, data }) => {
    
    const navigate=useNavigate()
    const selectedNewsDetails = (data)=>{

    let path = `/details`; 
    navigate(path,{state:{data}});

        
    }
    return (<div className='container topMargin' onClick={()=>selectedNewsDetails(data)}>
        
<div className="card small-card d-flex flex-row smallCard">
  <img src={data ? displayImg(data.profileImg):""}   style={{height:'70px',minWidth:'100px',marginRight:'4px'}} alt="..."/>
  <div className="card-small" >
                <p className="small-card-text">{data ? data?.headline:''}...</p>
            </div>
</div>
      
<h4 className='txt-url'>{navTitle?navTitle:''}</h4>

        </div>)
    

}
