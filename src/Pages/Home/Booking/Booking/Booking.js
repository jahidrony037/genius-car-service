import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceID } = useParams();
    return (
        <div>
            <h2>This is Booking {serviceID}</h2>
        </div>
    );
};

export default Booking;