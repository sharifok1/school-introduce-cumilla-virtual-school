import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServicePage.css'

const ServicePage = (props) => {
    const {name,img,charge,description}=props.serviceData
  
    return (
        <div>
         <div>
        <Col>
        <Card className="card-styles">
          <div className="card-alignment">
          <Card.Img className="service-photo" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
              {description}
              </Card.Text>
              <h4>Cost:{charge}</h4>
            </Card.Body>
          </div>
        </Card>
      </Col>
      </div>   
      </div>
    );
};

export default ServicePage;