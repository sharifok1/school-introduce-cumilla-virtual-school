import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './sixStudent.css'

const SixStudent = ({student}) => {
  const {img, name, fatherName,motherName, birthDate}=student
    return (
        <div className='mt-4 pt-4'>
          
           <Col>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>Name: {name}</Card.Title>
                 <Card.Text>
                  <p className=''>Father: {fatherName} <br />
                    Mother: {motherName} <br />
                    Date of Birth: {birthDate}
                  </p>
                 </Card.Text>
                 </Card.Body>
            </Card>
         </Col>
        </div>
    );
};

export default SixStudent;