import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hom4Service from '../Hom4service/Hom4Service';
import './HomePage.css'

const HomePage = () => {
    const [serviceData,setServiceData]=useState([]);
    useEffect(()=>{
        fetch('https://still-brook-37569.herokuapp.com/services')
        .then(res =>res.json())
        .then(data =>setServiceData(data))
    },[]);
    return (
        <div className="mb-4 homePage">
            
            <Row xs={2} md={3} lg={4} className="g-4">
            {
                serviceData.slice(0,4).map(data =>
                      <Hom4Service
                      key ={data.id}
                      servData={data}
                      />
                )    
            }
            </Row>
           <Link to ="/Services"><Button className="see-more p-2 m-4">See more</Button></Link>
           <div>
               <Row xs={1} md={2}> 
                   <Col>
                         <img className='img-fluid' src="https://media-eng.dhakatribune.com/uploads/2019/12/p1-31-12-19-motijheel-ideal-school-and-college-psc-and-jsc-result-2-1577813156866.jpg" alt="" />
                   </Col>
                   <Col>
                         <img className='img-fluid' src="https://www.laprensalatina.com/wp-content/uploads/2021/09/17874640w.jpg" alt="" />
                   </Col>
               </Row>
               
           </div>
        </div>
    );
};

export default HomePage;