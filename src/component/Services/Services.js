import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicePage from '../ServicePage/ServicePage';
import './Service.css'

const Services = () => {
    const [serviceData,setServiceData]=useState([]);
    useEffect(()=>{
        fetch('https://still-brook-37569.herokuapp.com/services')
        .then(res =>res.json())
        .then(data =>setServiceData(data))
    },[]);
    return (
        <div className="mb-5 service">
            <h2 className="text-start pb-4">We provided for each student</h2>
             <div>
            <Row xs={1} md={1} className="g-4">
            {
                serviceData.map(data =><ServicePage
                key = {data.id}
                serviceData={data}
                />)
            }
            </Row>
        </div>
        <p className="text-start pt-4">For more information please visite our school. Or fell free to call us</p>
        </div>
    );
};

export default Services;