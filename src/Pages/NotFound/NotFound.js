import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "70%" }} src={notfound} alt="" /> <br />
            <Link to="/home"><button className='btn btn-warning' >Go Back</button></Link>
        </div>
    );
};

export default NotFound;