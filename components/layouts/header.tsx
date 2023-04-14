import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';
import axios from "axios";
import { removeToken, removeStorageData, getCurrentUserData } from "../../lib/session";
import { getEditdata } from '@/lib/backendapi';

export default function Header() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialName, setInitialName] = useState('');
  const router = useRouter();
  const user_type = 'admin';
    const [additionalData, setadditionalData] = useState([]);



 // const [name, setName] = useState('');


  function redirectToLogin() {
      window.location.href = '/Login';
  }
  function handleLogout(e) {
      e.preventDefault();
      removeToken();
      removeStorageData();
      redirectToLogin();
  }

  useEffect(() => {
    // alert(localStorage.getItem('id'))
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const user_type = localStorage.getItem('user_type');
    
    if (token && id) {
      setIsAuthenticated(true);
      const firstName = localStorage.getItem('first_name');
      const lastName = localStorage.getItem('last_name');
      setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
    }
  }, []);

  // useEffect(() => {
  //   const user_id = localStorage.getItem('id');
  //   getEditdata(user_id).then((res)=>{
  //     console.log(res);
  //    setadditionalData(res.data);
      
  //   });
  // }, []);

    return (
        <>
         <header className="header-head dasktop-view">
        <div className="container"> 
          <nav className="navbar navbar-expand-lg navbar-light "> 
            <Link className="navbar-brand" href="/index"><img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/logo-white.png"} alt="logo-white" className="logo dasktop" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-lg-0 dasktop-menu">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/index">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/About">About Bungee</Link>
                </li>

                {/* {isAuthenticated && user_type == 'admin' ? 
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/admin/all-users">All Users</a>
                </li>
                : ''} */}

               
                  {isAuthenticated ?   <li className="nav-item">
                  <Link className="nav-link" href="/user/search">Search Reviews</Link>
                </li>  : '' }
              </ul>
              <ul className="navbar-nav ms-auto mb-lg-0 tab-mobile-menu">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-house" /> Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="search-reviews.html"><i className="fa-solid fa-magnifying-glass" /> Search Reviews</a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="about-bungee.html"><i className="fa-solid fa-question" /> About Bungee</a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="view-profile.html"> <i className="fa-solid fa-user" /> View your profile </a>
                </li>  
              </ul> 
             

              {isAuthenticated ?    <form className="d-flex"> 
                {/* <a href="#" className="btn btn-all header-btn" onClick={handleLogout}>Logout</a> */}
              </form> :  <form className="d-flex"> 
                <a href="/Login" className="btn btn-all header-btn" > Login</a>
              </form> }
              {isAuthenticated ?    <form className="d-flex"> 
                <Link href="/user/MyAccount"><div className="btn btn-all header-btn top-header-btn set" > {initialName}</div></Link>
              </form> :  <form className="d-flex"> 
              </form> }
               
            </div> 
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/logo-white.png"} alt="logo-white" className="logo mobile-view" /></a>
            <div className="user-profile mobile-view">
              {/* <img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/user.png"} alt="user" /> */}
              <div className="btn btn-all header-btn top-header-btn"> {initialName}</div>
            </div>


          </nav>
        </div>
      </header>
    </>
  )
}