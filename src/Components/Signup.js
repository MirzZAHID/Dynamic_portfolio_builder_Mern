import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validationsignup';
import axios from 'axios';
import { Navbar } from '../Pages';
import MainPageLAyout from '../Layouts/MainPageLAyout';
import { toast } from 'react-toastify';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
  
    if (err.name === '' && err.email === '' && err.password === '') {
      axios
        .post('http://localhost:8081/signup', values)
        .then((res) => {
          console.log(res);
          toast.success('Congratulations! Welcome Aboard to the Portfolio Builder. Please Login...',{
            width: "600px" ,
          });

          navigate('/login');
        })
        .catch((err) => {
          if (err.response && err.response.status === 409) {
            // HTTP status code 409 indicates a conflict, likely due to duplicate email
            toast.error('Email already exists. Please use a different email.',{
              width: "600px" 
            });
          } else {
            toast.error(err);
            console.log(err);
            // Handle other types of errors
          }
        });
    }
  };
  

  return (
    <MainPageLAyout>

      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded '>
          <h2>Sign-Up</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name'>
                <strong>Name</strong>
              </label>
              <input
                type='text'
                placeholder='Enter Name'
                name='name'
                onChange={handleInput}
                className='form-control rounded-0'
              />
              {errors.name && <span className='text-danger'> {errors.name}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>
                <strong>Email</strong>
              </label>
              <input
                type='email'
                placeholder='Enter Email'
                name='email'
                onChange={handleInput}
                className='form-control rounded-0'
              />
              {errors.email && <span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>
                <strong>Password</strong>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                name='password'
                onChange={handleInput}
                className='form-control rounded-0'
              />
              {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>
              Sign up
            </button>
            <p>You agree to our terms and policies</p>
            <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
              Login
            </Link>
          </form>
        </div>
      </div>
    </MainPageLAyout>
  );
}

export default Signup;