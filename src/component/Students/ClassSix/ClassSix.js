import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SixStudent from './SixStudent/SixStudent';

const ClassSix = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='https://still-brook-37569.herokuapp.com/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const six = students.filter(classSix => classSix.class === 'six')
    
    return (
        <div className='mt-4 mb-5 pb-4'>
            <Container>
            <h1>Student of class six, New batch 2022</h1>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    six.map(student=>(<SixStudent
                    key={student._id}
                    student ={student}
                    ></SixStudent>
                  
                    ))}
               
               
            </Row>
            </Container>
        </div>
    );
};

export default ClassSix;