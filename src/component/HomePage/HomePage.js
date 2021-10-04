import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hom4Service from '../Hom4service/Hom4Service';
import './HomePage.css'

const HomePage = () => {
    const [serviceData,setServiceData]=useState([]);
    useEffect(()=>{
        fetch('./ServiceData.JSON')
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
           <Link to ="/Services"><Button className="see-more">See more</Button></Link>
        </div>
    );
};

export default HomePage;