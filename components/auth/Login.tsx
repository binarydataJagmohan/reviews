import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {login} from '../../lib/frontendapi';
import { removeToken, removeStorageData } from "../../lib/session";

export default function Login() {

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    removeToken();
    removeStorageData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  } 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error('Please fill in all the required fields');
      return;
    } else {
      
      login(user)
	    .then(res => {
	    	if(res.status==true){
          if(res.authorisation.token){
            window.localStorage.setItem("token", res.authorisation.token);
            window.localStorage.setItem("id", res.user.id);
            window.localStorage.setItem("first_name", res.user.first_name);
            window.localStorage.setItem("last_name", res.user.last_name);
            window.localStorage.setItem("email", res.user.email);
      
            toast.success(res.message, {
              position: toast.POSITION.TOP_RIGHT,
            });

            window.location.href = '/user/search';

		      } else {
            
              toast.error('You are not a authorized user', {
                position: toast.POSITION.TOP_RIGHT,
              });
		      	}
		    } else {

          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          
		    	
		      }
	    })
	    .catch(err => {
	        console.log(err);
	    });

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
              <input type={showPassword ? "text" : "password"} name="password" onChange={handleChange}/>
              <p className="show" onClick={togglePasswordVisibility}><a href="#">Show</a></p>
            </div>
            <p className="forgot-password"><a href="/forgetpassword">Forgot password?</a></p>
            <button type="submit" className="btn-send">Login </button>
            <Link href="/SignUp" className="btn-send black">New to Bungee? Sign up now </Link>
          </form>
        </div>
        <ToastContainer />
      </section>
        </>
    )
}