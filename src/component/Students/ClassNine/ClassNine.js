import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import NineStudent from './NineStudent/NineStudent';

const ClassNine = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='http://localhost:3010/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const nine = students.filter(classNine => classNine.class === 'nine')
    return (
        <div>
             <Row xs={1} md={2} className="g-4">
             {
                     nine.map(student=> <NineStudent
                    key={student._id}
                     student={student}
                     ></NineStudent>)    
                }
                </Row>
        </div>
    );
};

export default ClassNine;