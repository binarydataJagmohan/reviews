import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {register} from '../../lib/frontendapi';
import { removeToken, removeStorageData } from "../../lib/session";

export default function SignUp()
{
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [shownPassword, setShownPassword] = useState(false);
  

  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    removeToken();
    removeStorageData();
  }, []);

<<<<<<< HEAD:components/auth/SignUp.tsx
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const PasswordVisibility = () => {
    setShownPassword(!shownPassword);
  }
=======
>>>>>>> 65d4f72bbff627725090e092365ec2b6059a0969:components/frontend/SignUp.tsx


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

    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(user.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
  
    if (user.password !== user.password_confirmation) {
      toast.error('Password and confirm password fields do not match');
      return;
    }

    register(user)
	    .then(res => {
	    	if(res.status==true){
		    	if(res.token){
            window.localStorage.setItem("token", res.token);
            window.localStorage.setItem("id", res.user.id);
            window.localStorage.setItem("first_name", res.user.first_name);
            window.localStorage.setItem("last_name", res.user.last_name);
            window.localStorage.setItem("email", res.user.email);
      
            toast.success(res.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
<<<<<<< HEAD:components/auth/SignUp.tsx
             window.location.href = '/user/search';
		      } else {
              toast.error('You are not a authorized user', {
                position: toast.POSITION.TOP_RIGHT,
              });
		      	}
		    } else {
          
		    	let errors = res.errors;
          let errorMessage = "";
          for (let error in errors) {
            errorMessage += errors[error];
          }
          toast.error(errorMessage, {
            position: toast.POSITION.TOP_RIGHT,
          });
		      }
	    })
	    .catch(err => {
	        console.log(err);
	    });
    
=======

             window.location.href = '/user/EditProfile';
>>>>>>> 65d4f72bbff627725090e092365ec2b6059a0969:components/frontend/SignUp.tsx


<<<<<<< HEAD:components/auth/SignUp.tsx
=======
		      } else {
            
              toast.error('You are not a authorized user', {
                position: toast.POSITION.TOP_RIGHT,
              });
		      	}
		    } else {
          
		    	let errors = res.errors;
          let errorMessage = "";
          for (let error in errors) {
            errorMessage += errors[error];
          }
          toast.error(errorMessage, {
            position: toast.POSITION.TOP_RIGHT,
          });
		      }
	    })
	    .catch(err => {
	        console.log(err);
	    });
    

  }

>>>>>>> 65d4f72bbff627725090e092365ec2b6059a0969:components/frontend/SignUp.tsx
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
              <input type={showPassword ? "text" : "password"} onChange={handleChange} name="password"/>
              <p className="show" onClick={togglePasswordVisibility}><a href="javascript:void(0)">Show</a></p>
            </div>
            <div className="show-fild">
              <label>Confirm Password</label>
              <input type={shownPassword ? "text" : "password"}  onChange={handleChange} name="password_confirmation" />
              <p className="show"  onClick={PasswordVisibility}><a href="javascript:void(0)">Show</a></p>
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