import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TeacherDisplay from '../TeacherDisplay/TeacherDisplay';
import './Teachers.css'


// ----------------fatching teacher data
// ------------------------------------------------
const Teachers = () => {
    const [teachers ,setTeacher]=useState([]);
    useEffect(()=>{
        fetch('/teacherData.JSON')
        .then(res=>res.json())
        .then(data =>setTeacher(data))
        
    },[])
    return (
        <div className="mb-4 teachers-container">
           <h2>Our All Teachers</h2>
           <Row xs={2} md={3} lg={4} className="g-4">

               {/* ------pass data to the component///
               ------------------------------------------ */}
           {
               teachers.map(teacher=><TeacherDisplay
               key={teacher.Phone}
               teachers={teacher}
               ></TeacherDisplay>)
           }
        </Row>           
        </div>
    );
};

export default Teachers;