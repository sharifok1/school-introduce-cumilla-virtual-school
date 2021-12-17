import axios from 'axios';
import React from 'react';
// import { useState } from 'react';
import { useForm } from "react-hook-form";
import "./Addmission.css"

const Addmission = () => {
    // const [studentData, setStudentData] = useState()
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
      console.log(data)
    const url = 'https://still-brook-37569.herokuapp.com/studentsData'
    axios.post(url, data)
    .then(res=>{
        if(res.data.insertedId){
            alert('order successfully confirmed')
            reset();
        }
    })
  }
    return (
       <div>
            <br />
           <h3 >
               Please fill the form with valid information 
           </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className='studentformPage'>
        <input className='studentForm' {...register("name")} placeholder='Student full name' required />
        <input className='studentForm' {...register("birthDate")} placeholder='date of birth' type="date" required />
       <div className='formOption'>
       <select className='formSelector' {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        
        <select className='formSelector' {...register("class")}>
          <option value="six" placeholder='class'>class six</option>
          <option value="seven">class seven</option>
          <option value="eight">class eight</option>
          <option value="nine">class nine</option>
        </select>
       </div>
        <input className='studentForm' {...register("fatherName")} placeholder='father name' required />
        <input className='studentForm' {...register("motherName")} placeholder='mother name' required />
        <input className='studentForm' {...register("district")} placeholder='district' required />
        <input className='studentForm' {...register("address")} placeholder='address' required />
        <input className='studentForm' {...register("postalCode")} placeholder='postal code' required />
        <input className='studentForm' {...register("religion")} placeholder='religion' required />
        <select className='studentForm' {...register("disability")} placeholder='Physical disability'>
          <option  value="Physical disability">Physical disability - 'Yes'</option>
          <option className='formOption' value="No">Physical disability - 'No'</option>
        </select>
        <input className='formSubmit' type="submit" />
        </div>
      </form>
       </div>
    );
};

export default Addmission;