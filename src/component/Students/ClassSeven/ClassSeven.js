import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
        <div>
             <Row xs={1} md={2} className="g-4">
             {
                     seven.map(student=> <SevenStudent
                    key={student._id}
                     student={student}
                     ></SevenStudent>)    
                }
                </Row>
        </div>
    );
};

export default ClassSeven;