import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TeacherDisplay.css'

const TeacherDisplay = (props) => {
    const{img,name,Phone,Subject}=props.teachers
    return (
        <div >
           <Col className="card-align">
            <Card className="teacher-card">
                <Card.Img className="image-style" variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {Subject}
                   <h5>Phone:+{Phone}</h5>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>       
        </div>
    );
};

export default TeacherDisplay;