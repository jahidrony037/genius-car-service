import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p className='px-3'><small>{description}</small></p>
            <Link to={`/booking/${id}`}><button className='btn btn-primary'>Book: {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;