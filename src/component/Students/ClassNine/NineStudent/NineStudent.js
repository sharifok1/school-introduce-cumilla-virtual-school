import React from 'react';
import { Card, Col } from 'react-bootstrap';

const NineStudent = ({student}) => {
    const {img, name, fatherName,motherName, birthDate}=student
    return (
        <div>
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

export default NineStudent;