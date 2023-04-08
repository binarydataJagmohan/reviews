import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'
import { removeToken, removeStorageData, getCurrentUserData } from "../../lib/session";

export default function Header() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

    if (token && id) {
      setIsAuthenticated(true);
    }
  }, []);

    return (
        <>
         <header className="header-head dasktop-view">
        <div className="container"> 
          <nav className="navbar navbar-expand-lg navbar-light "> 
            <Link className="navbar-brand" href="/"><img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/logo-white.png"} alt="logo-white" className="logo dasktop" /></Link>
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
                <a href="#" className="btn btn-all header-btn" onClick={handleLogout}> Logout</a>
              </form> :  <form className="d-flex"> 
                <a href="/Login" className="btn btn-all header-btn" > Login</a>
              </form> }

            </div> 
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/logo-white.png"} alt="logo-white" className="logo mobile-view" /></a>
            <div className="user-profile mobile-view">
              <img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/user.png"} alt="user" />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
