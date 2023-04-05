import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

export default function SignUp()
{
  const [errorMessage, setErrorMessage] = useState('');

  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.first_name || !user.last_name || !user.email || !user.password || !user.password_confirmation) {
      toast.error('Please fill in all the required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
  
    if (user.password !== user.password_confirmation) {
      toast.error('Password and confirm password fields do not match');
      return;
    }

    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, user);
    console.log(res);

    if (res.data.exists) {
      toast.error('This email address is already registered');
      return;}
      
    toast.success('Registration successful!', { autoClose: 5000 });
    if (res.status === 200) {

      localStorage.setItem('token', res.data.token);
      router.push('/SignUp'); // Redirect to the login page
    }

  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/logout'); // Redirect to the logout page
  }
    return(
        <>
          <section className="form-part ">
        <div className="container"> 
          <form className="form-center" onSubmit={handleSubmit}>
            <img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/logo-blue.png"} alt="logo-blue" className="logo-blue" />
            <label>First Name</label>
            <input type="text" name='first_name' onChange={handleChange}/>
            <label>Last Name</label>
            <input type="text" onChange={handleChange} name='last_name'/>
            <label>Email</label>
            <input type="text" onChange={handleChange} name="email"/>
            <div className="show-fild">
              <label>Create Password</label>
              <input type="password" onChange={handleChange} name="password"/>
              <p className="show"><a href="#">Show</a></p>
            </div>
            <div className="show-fild">
              <label>Confirm Password</label>
              <input type="password" onChange={handleChange} name="password_confirmation" />
              <p className="show"><a href="#">Show</a></p>
            </div>
            {/* <a href="#" className="btn-send">Sign up now</a> */}
            <button type="submit" className="btn-send">Sign up now</button>
            <p className="account">Already have an account?</p>
            <Link href="/Login" className="btn-send black">Login now</Link>
          </form>
        </div>
        <ToastContainer />
      </section>
        </>
    )
}