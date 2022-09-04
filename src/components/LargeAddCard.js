import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function LargeAddCard({ title, img, data }) {
    
    // console.log(data)
    return (<>

        {title ? <h4 className='txt-url'>{title}</h4>: ''}
              {title ? <hr />: ''}
 

      <Card className='adCard'>
      <Card.Img variant="top" src={require('../assets/addCard.jfif')}  />
      <Card.Body>
        {/* <Card.Title>{ "Add Card Title"}</Card.Title> */}
        {/* <Card.Text>
                    If by 'more sophisticated' you mean truncating at the last word boundary of a string then you need an 
                    extra check. First you clip the string to the desired length, next you clip the result of that to its last word boundary
                    
        </Card.Text> */}
    </Card.Body>
        </Card>
    </>
        
  );
}

export default LargeAddCard;