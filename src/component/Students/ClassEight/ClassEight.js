import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import EightStudent from './EightStudent/EightStudent';

const ClassEight = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='http://localhost:3010/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const eight = students.filter(classEight => classEight.class === 'eight')
    return (
        <div>
              <Row xs={1} md={2} className="g-4">
             {
                eight.map(student=> <EightStudent
                key={student._id}
                student={student}
                    ></EightStudent>)    
                }
                </Row>
        </div>
    );
};

export default ClassEight;