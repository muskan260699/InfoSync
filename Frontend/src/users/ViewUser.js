import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../image3.jpg';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function ViewUser() {

const {id}=useParams()
  let navigate=useNavigate()
  const [details, setDetails]=useState({
    name:'',
    username:'',
    mail:''

  });
  
  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers= async ()=>{
    const result= await axios.get(`http://localhost:8080/user/${id}`, details)
    setDetails(result.data);
  }

  

  return (

    <div className='container-fluid'>
      <form>
      {/* <img src={image} class="img-thumbnail" alt="abc"></img> */}
      <div className="row">
        <div className="col-md-6 mt-2 offset-md-3 p-4 border rounded shadow" style={{ backgroundImage: `url(${image})`, backgroundSize: '800px 500px' }}>


          <h2 className="text-center m-4">Edit User</h2>
          <div className="row" >
            <div className="row mb-2 justify-content-center">
              <div htmlFor='Name' className='col-form-label col-md-2 text-start'>Name:</div>
              {/* <input type={"text"} className='col-form-control rounded col-md-5' name="name" placeholder='Enter your Name' value={details.name} onChange={handleChange} required></input> */}
            <label htmlFor='NameValue' className='col-form-label col-md-2 text-start' name="name">{details.name}</label>
            </div>
            <div className="row mb-2 justify-content-center">
              <div htmlFor='Username' className='col-form-label col-md-2 text-start'>Username:</div>
              <label htmlFor='UsernameValue' className='col-form-label col-md-2 text-start' name="username">{details.username}</label>
              {/* <input type={"text"} className='col-form-control rounded col-md-5' name="username" placeholder='Enter your username' value={details.username} onChange={handleChange} required></input> */}
            </div>
            <div className="row mb-2 justify-content-center">
              <div htmlFor='Email' className='col-form-label col-md-2 text-start'>Email:</div>
              <label htmlFor='EmailValue' className='col-form-label col-md-2 text-start' name="mail">{details.mail}</label>
              {/* <input type={"email"} className='col-form-control rounded col-md-5' name="mail" placeholder='Enter your email id' value={details.mail} onChange={handleChange} required></input> */}
              {/* <small className='text-muted'>We'll never share your email with anyone else.</small> */}
            </div>
            {/* <button type='submit' className='btn btn-outline-success col-md-4 text-dark mx-auto' >Submit</button> */}
            <Link className='btn btn-outline-danger col-md-4 mx-2 text-dark mx-auto' to="/">Back</Link>
          </div>
        </div>

      </div>
    
      </form>
    </div>

  )
}
