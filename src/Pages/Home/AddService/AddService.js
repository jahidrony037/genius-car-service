import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post(`https://limitless-savannah-07606.herokuapp.com/services`, data)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    alert("service update successfully");
                    reset();
                }
            })
            .catch(console.error())
    };
    return (
        <div className='add-service'>
            <h2>Please ADD a SERVICE</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea  {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;