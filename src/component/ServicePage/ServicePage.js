import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServicePage = (props) => {
    const {name,img,charge,description}=props.serviceData
  
    return (
        <div>
         <div>
        <Col>
      <Card>
       <div className="d-flex">
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
        </div>
    );
};

export default ServicePage;