import React from 'react'
import Card from 'react-bootstrap/Card';
import { displayImg } from '../utils/imageConverter'
import { formatDateTimeStamp } from '../utils/dateFormatter'
import DOMPurify from 'dompurify';
export const SingleNewsContent = ({data:{data}}) => {

    console.log(data)
        const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data?.content)
  })
    return (<>
        <div className='row'>
              <h4>{data.headline} </h4>
              <b><span>By {data.name +" "+ formatDateTimeStamp(data.post_date) }</span></b>
        
            
            {/* <img src={data ? data?.profileImg:"https://via.placeholder.com/680x390.png"} style={{height:'390px',width:'680px'}} /> */}
            <img src={displayImg(data?.profileImg)} style={{height:'390px',width:'680px', marginBottom: '30px'}} />
        </div>
          <div   style={{whiteSpace : 'pre-line'}} dangerouslySetInnerHTML={sanitizedData()}  ></div>
        {/* <span style={{whiteSpace : 'pre-line'}}>{data.content}</span> */}

    </>
    
  )
}