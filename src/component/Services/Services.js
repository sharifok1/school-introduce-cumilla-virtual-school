import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicePage from '../ServicePage/ServicePage';

const Services = () => {
    const [serviceData,setServiceData]=useState([]);
    useEffect(()=>{
        fetch('./ServiceData.JSON')
        .then(res =>res.json())
        .then(data =>setServiceData(data))
    },[]);
    return (
        <div>
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
        </div>
    );
};

export default Services;