import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import { Navbar } from '../Pages';
import { toast } from 'react-toastify';
import MainPageLAyout from '../Layouts/MainPageLAyout';


function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.email === '' && err.password === '') {
      axios
        .post('http://localhost:8081/login', values)
        .then((res) => {
          if (res.data.errors) {
            setBackendError(res.data.errors);
          } else {
            setBackendError([]);
            if (res.data.message === 'Success') {
              const user = res.data.user
              toast.success("Welcome Aboard... Dear "+ user[0].name+"!" , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                width: "400px" 
                });
              
              if(user.length>0){
                if(user[0].role && user[0].role === 'admin'){
                  toast.success("Welcome Aboard... Dear Admin "+ user[0].name+"!" , {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                    });
                  localStorage.setItem('token',res.data.token)
                  navigate('/mainpage')
                }
                else{
                  localStorage.setItem('token',res.data.token)
                  navigate("/profile")
                }
              }
            } else {
             
              toast.error("Failed to Login, Please Try Again! ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                width: "400px" 
                });
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <MainPageLAyout>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded '>
          <h2>Sign-In</h2>
          {backendError ? (
            backendError.map((e) => (
              <p key={e.msg} className='text-danger'>
                {e.msg}
              </p>
            ))
          ) : (
            <span></span>
          )}
          <form action='' onSubmit={handleSubmit}>
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
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>
                <strong>Password</strong>
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter Password'
                  name='password'
                  onChange={handleInput}
                  className='form-control rounded-0'
                />
                <button 
                  className="btn btn-outline-secondary" 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>
              Log in
            </button>
            <p>You agree to our terms and policies</p>
            <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </MainPageLAyout>
  );
}

export default Login;
