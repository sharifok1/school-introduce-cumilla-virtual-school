import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import SixStudent from './SixStudent/SixStudent';

const ClassSix = () => {
    const [students, setStudents]=useState([])
    useEffect(()=>{
        const url='http://localhost:3010/studentsData'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setStudents(data))
    },[])
    const six = students.filter(classSix => classSix.class === 'six')
    
    return (
        <div>
            
            <Row xs={1} md={2} className="g-4">
                {
                    six.map(student=>(<SixStudent
                    key={student._id}
                    student ={student}
                    ></SixStudent>
                  
                    ))}
               
               
            </Row>
        </div>
    );
};

export default ClassSix;