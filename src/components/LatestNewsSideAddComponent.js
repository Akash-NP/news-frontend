import React from 'react'
import Card from 'react-bootstrap/Card';



// currently not using this comp
export const LatestNewsSideAddComponent = () => {
    return (<>
             <Card>
      <Card.Img variant="top"  src='https://via.placeholder.com/640x360.png?text=Banner+Advertisement '  />
      <Card.Body>
        {/* <Card.Title>{ "Add Card Title"}</Card.Title> */}
        {/* <Card.Text>
                     If by 'more sophisticated' you mean truncating at the last word boundary of a string then you need an 
                    extra check. First you clip the string to the desired length, next you clip the result of that to its last word boundary
                    
        </Card.Text> */}
    </Card.Body>
        </Card>
    </>
    
  )
}
