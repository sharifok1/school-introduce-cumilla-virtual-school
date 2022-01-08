import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SevenStudent from './SevenStudent/SevenStudent';

const ClassSeven = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='http://localhost:3010/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const seven = students.filter(classSeven => classSeven.class === 'seven')
    console.log(seven)
    return (
        <div className='mt-5 mb-5 pb-4'>
            <h1 className='mb-4'> Student of Class Seven, Batch 2022</h1>
             <Container>
             <Row xs={1} md={3} lg={4} className="g-4">
             {
                     seven.map(student=> <SevenStudent
                    key={student._id}
                     student={student}
                     ></SevenStudent>)    
                }
                </Row>
                </Container>
        </div>
    );
};

export default ClassSeven;