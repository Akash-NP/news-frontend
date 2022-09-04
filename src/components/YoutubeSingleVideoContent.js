import React from 'react'
import Card from 'react-bootstrap/Card';
import { displayImg } from '../utils/imageConverter'
import { formatDateTimeStamp } from '../utils/dateFormatter'
import DOMPurify from 'dompurify';
export const YoutubeSingleContent = ({data:{data}}) => {

    console.log(data)
        const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data?.content)
  })
    return (<>
        <div className='row'>
              <h4>{data.headline} </h4>
        <span>By {data.name +" "+ formatDateTimeStamp(data.post_date) }</span>
            
            {/* <img src={data ? data?.profileImg:"https://via.placeholder.com/680x390.png"} style={{height:'390px',width:'680px'}} /> */}
           <iframe
                src={`https://www.youtube.com/embed/${data?.youtubeVideoId}`}
        frameborder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen
                title="video"
                style={{height:'450px'}}
        
      />
        </div>
          <div   style={{whiteSpace : 'pre-line'}} dangerouslySetInnerHTML={sanitizedData()}  ></div>
        {/* <span style={{whiteSpace : 'pre-line'}}>{data.content}</span> */}

    </>
    
  )
}