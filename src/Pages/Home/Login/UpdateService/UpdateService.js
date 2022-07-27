import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateService.css';
const UpdateService = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://limitless-savannah-07606.herokuapp.com/services/${id}`;
        axios.get(url)
            .then(res => setService(res.data))
    }, [id])

    const handleNameChange = (e) => {
        const updateName = e.target.value;
        const updateService = { name: updateName, description: service.description, price: service.price };
        setService(updateService);
    }
    const handleDescriptionChange = (e) => {
        const updateDescription = e.target.value;
        const updateService = { name: service.name, description: updateDescription, price: service.price };
        setService(updateService);
    }
    const handlePriceChange = (e) => {
        const updatePrice = e.target.value;
        const updateService = { name: service.name, description: service.description, price: updatePrice };
        setService(updateService);
    }
    const handleUpdateService = (e) => {
        e.preventDefault();

        const url = `https://limitless-savannah-07606.herokuapp.com/services/${id}`;
        axios.put(url, service)
            .then(res => {
                const data = res.data;
                if (data.modifiedCount) {
                    alert("data updated successfully");
                    setService({});
                }
            })
        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(service)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }
    return (
        <div className='update-service'>
            <h2>Update Service: {id}</h2>
            <h3>name: {service.name}</h3>
            <form onSubmit={handleUpdateService}>
                <input type="text" name="name" onChange={handleNameChange} id="price" value={service.name || " "} />
                <textarea name="description" onChange={handleDescriptionChange} id="description" cols="30" rows="5" value={service.description || " "}></textarea>
                <input type="number" name="price" onChange={handlePriceChange} id="price" value={service.price || "0"} />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateService;