import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EightStudent from './EightStudent/EightStudent';

const ClassEight = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='https://still-brook-37569.herokuapp.com/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const eight = students.filter(classEight => classEight.class === 'eight')
    return (
        <div className='mt-5 mb-5 pb-4'>
            <h1 className='mb-4'>Student of class Eight, Batch 2022</h1>
            <Container>
              <Row xs={1} md={3} lg={4} className="g-4">
             {
                eight.map(student=> <EightStudent
                key={student._id}
                student={student}
                    ></EightStudent>)    
                }
                </Row>
                </Container>
        </div>
    );
};

export default ClassEight;