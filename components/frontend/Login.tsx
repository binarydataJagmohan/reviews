import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {

  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error('Please fill in all the required fields');
      return;
    }
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, user);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        router.push('/User/Search'); // Redirect to the dashboard page
      }
      // toast.success('Login successful!', { autoClose: 5000 });
      // You can redirect the user to another page upon successful login
     } 
         //catch (error) {
    //   console.log(error);
    //   setErrorMessage('Invalid email or password');
    catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.error('Email does not exist');
      } else if (error.response.status === 401) {
        toast.error('Password mismatch');
      } else {
        setErrorMessage('An error occurred');
      }
    }
  }
    return(
        <>
          <section className="form-part ">
        <div className="container"> 
        
          <form className="form-center" onSubmit={handleSubmit}>
            <img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/logo-blue.png"} alt="logo-blue" className="logo-blue" />
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />
            <div className="show-fild">
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange}/>
              <p className="show"><a href="#">Show</a></p>
            </div>
            <p className="forgot-password"><a href="#">Forgot password?</a></p>
            <button type="submit" className="btn-send">Login </button>
            <Link href="/SignUp" className="btn-send black">New to Bungee? Sign up now </Link>
          </form>
        </div>
        <ToastContainer />
      </section>
        </>
    )
}