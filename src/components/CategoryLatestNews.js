import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LatestNewsSideAddComponent } from './LatestNewsSideAddComponent';
import { SmallCard } from './SmallCard';
import {displayImg} from '../utils/imageConverter'
import LargeCard from './LargeCard';
import LargeAddCard from './LargeAddCard';

function CategoryLatestNews({ title, img, data }) {
console.log(data)
    return (<>

        {title ? <h4 className='txt-url'>{title}</h4>: ''}
              {title ? <hr />: ''}
 
        <LargeCard data={data[0]} title="LATEST NEWS" />

      {/* <Card>
      <Card.Img variant="top" src={data ? displayImg(data[0] ?.profileImg) : "https://www.fillmurray.com/640/360"} />
      <Card.Body>
        <Card.Title>{ data ? data[0]?.headline.slice(0, 100) : "Card Title"}</Card.Title>
        <Card.Text>
                    {data ? data[0]?.content.slice(0, 100) : `If by 'more sophisticated' you mean truncating at the last word boundary of a string then you need an 
                    extra check. First you clip the string to the desired length, next you clip the result of that to its last word boundary`}
                    
        </Card.Text>
    </Card.Body>
        </Card> */}
        {data?.map((item, index) => {
            if (index > 0) {
                if (index < 5) {
                    
                    return <SmallCard data={item} key={index}/>
                }
            }
        })}
     
        {/* <LatestNewsSideAddComponent/> */}
        <LargeAddCard/>
    </>
        
        
  );
}

export default CategoryLatestNews;