import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`https://limitless-savannah-07606.herokuapp.com/services`)
            .then(res => { setServices(res.data) })
    }, [])

    const handleRemoveService = (id) => {
        // console.log(id);
        const url = `https://limitless-savannah-07606.herokuapp.com/services/${id}`;
        axios.delete(url)
            .then(res => {
                const data = res.data;
                console.log(data);
                if (data.deletedCount) {
                    alert("deleted Successfully");
                    const remainingService = services.filter(service => service._id !== id);
                    setServices(remainingService);
                }

            })

        // fetch(url, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }
    return (
        <div>
            <h2>This is ManageServices</h2>
            <ul>
                {
                    services.map(service => <div className='service' key={service._id}><h3>Name :: {service.name}</h3> <h4>Price :: {service.price}</h4>
                        <Link to={`/updateService/${service._id}`}><button>update</button></Link>
                        <button className='btn-secondary' onClick={() => { handleRemoveService(service._id) }}>Delete</button>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default ManageServices;