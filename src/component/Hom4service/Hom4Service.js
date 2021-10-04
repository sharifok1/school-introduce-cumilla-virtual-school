import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Hom4Service.css'
const Hom4Service = (props) => {
    const {img,charge,description,name}=props.servData
    console.log(props)
    return (
        <div>
            <Col>
                {/* home page single 4 card//------------
                --------------------------------------------- */}
                <Card className="fourCards">
                    <Card.Img className="card-image" variant="top" src={img}/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <h5>Cost:{charge}</h5>
                    </Card.Text>
                    </Card.Body>
                </Card>
    </Col>
        </div>
    );
};

export default Hom4Service;