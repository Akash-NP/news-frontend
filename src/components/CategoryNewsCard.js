import DOMPurify from 'dompurify';
import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../utils/DisplayResolution';
import { displayImg } from '../utils/imageConverter'





export const CategoryNewsCard = ({ navTitle, data }) => {
    const { height, width } = useWindowDimensions();
    console.log(height, width)
    useEffect(() => {
          if (width < 500) {
        setIsMobile(true)
        }
          else {
              setIsMobile(false)
        }
    },[width])
    const [isMobile,setIsMobile]=useState(false)
  
    
    const navigate=useNavigate()
    const selectedNewsDetails = (data)=>{

    let path = `/details`; 
    navigate(path,{state:{data}});

        
    }

      const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data?.content)
  })





    return (<div className='container topMargin ' onClick={()=>selectedNewsDetails(data)}>
        
        <div className={isMobile ? `card small-card d-flex flex-column mediumCard mobileCard`: `card small-card d-flex flex-row mediumCard`}>
            
  <img src={displayImg(data?.profileImg)} style={isMobile?{height:'105px',marginBottom:'10px',width:'100%'}:{height:'105px',width:'180px', marginRight: '10px'}}  alt="..."/>
  <div className={isMobile?"card-small":'card-small mediumCardContent'} >
                <p  className="card-text boldText">{data ? data?.headline.slice(0,80) : 'No Headline'}...</p>
               <div dangerouslySetInnerHTML={sanitizedData()}></div>
            </div>
            
</div>
      
<h4 className='txt-url'>{navTitle?navTitle:''}</h4>

        </div>)
    

}
