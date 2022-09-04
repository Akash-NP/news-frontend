import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DOMPurify from 'dompurify'
import { useNavigate } from 'react-router-dom';
import {displayImg} from '../utils/imageConverter'
import { AdHeader } from './BannerAdvertisement';
function LargeCard({ title, img, data }) {
   const navigate=useNavigate()
    const selectedNewsDetails = (data)=>{

    let path = `/details`; 
    navigate(path,{state:{data}});

        
    }

      const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data?.content)
  })
    // console.log(data)
    return (<>

        {title ? <h4 className='txt-url'>{title}</h4>: ''}
              {title ? <hr />: ''}
 
     

      <Card onClick={()=>selectedNewsDetails(data)} className='largeCard'>
      <Card.Img variant="top" src={data ? displayImg(data.profileImg) : "https://www.fillmurray.com/640/360"} style={{height:'186px'}} />
      <Card.Body>
        <Card.Title>{ data ? data?.headline.slice(0, 100)  : "Card Title"}</Card.Title>
        <Card.Text>
            {/* {data ? data?.content.slice(0, 150) :''} */}
                          <div dangerouslySetInnerHTML={sanitizedData()}></div>
        </Card.Text>
    </Card.Body>
        </Card>
    </>
        
  );
}

export default LargeCard;