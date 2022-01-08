import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NineStudent from './NineStudent/NineStudent';

const ClassNine = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='https://still-brook-37569.herokuapp.com/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const nine = students.filter(classNine => classNine.class === 'nine')
    return (
        <div className='mt-5 mb-5 pb-4'>
            <h1 className='mb-5'>Student of Class Nine, batch 2022</h1>
            <Container>
             <Row xs={1} md={3} lg={4} className="g-4">
             {
                     nine.map(student=> <NineStudent
                    key={student._id}
                     student={student}
                     ></NineStudent>)    
                }
                </Row>
                </Container>
        </div>
    );
};

export default ClassNine;