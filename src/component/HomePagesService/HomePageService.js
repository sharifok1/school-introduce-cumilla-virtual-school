import React from 'react';
import './HomePageService.css'
import { Card, Col } from 'react-bootstrap';
const HomePageService = (props) => {
    const {name,img,charge,description}=props.serviceData
    return (
      <div>
        <Col>
      <Card>
       <div className="">
       <Card.Img className="service-photo" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <h3>Cost:{charge}</h3>
        </Card.Body>
       </div>
      </Card>
    </Col>
      </div>

        
    );
};

export default HomePageService;