import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceID } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        axios.get(`https://limitless-savannah-07606.herokuapp.com/services/${serviceID}`)
            .then(res => {
                setService(res.data)

            })
    }, [serviceID])
    return (
        <div>
            <h2> Details of : {service.name}</h2>
            <h2> Booking : {serviceID}</h2>

            <img src={service.img} alt="service" />
            <h4>Price : {service.price}</h4>
            <p><small>{service.description}</small></p>
        </div>
    );
};

export default Booking;