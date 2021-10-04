import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomePageService from '../HomePagesService/HomePageService';

const HomePage = () => {
    const [serviceData,setServiceData]=useState([]);
    useEffect(()=>{
        fetch('./ServiceData.JSON')
        .then(res =>res.json())
        .then(data =>setServiceData(data))
    },[]);
    
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
            {
                serviceData.map(data =>
                        <HomePageService
                        key = {data.id}
                        serviceData={data}
                        />
               )
                
            }
            </Row>
            <div>
                <h4>This is a footer</h4>
            </div>
        </div>
    );
};

export default HomePage;