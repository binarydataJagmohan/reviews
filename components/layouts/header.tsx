/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';
import axios from "axios";
import { removeToken, removeStorageData, getCurrentUserData } from "../../lib/session";
import { saveAdminProfileData, getUserProfileData, LikeReview, deleteReviews, EditProfileData, getEditdata, getUserProfileDatabyid } from "../../lib/backendapi";


interface EditData {
  font_color: string;
  background_color: string;
  set_name?: string | null;
}
export default function Header() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialName, setInitialName] = useState('');
  const router = useRouter();
  const user_type = 'admin';
  const [additionalData, setadditionalData] = useState([]);
  // const [additionalData, setadditionalData] = useState<EditData>({ font_color: '', background_color: '', set_name: '' });
  // const style = {
  //   color: additionalData?.font_color ?? '',
  //   background: additionalData?.background_color ?? ''
  // };

  function redirectToLogin() {
    window.location.href = '/Login';
  }
  function handleLogout(e: any) {
    e.preventDefault();
    removeToken();
    removeStorageData();
    redirectToLogin();
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const user_type = localStorage.getItem('user_type');

    if (token && id) {
      setIsAuthenticated(true);
      const firstName = localStorage.getItem('first_name');
      const lastName = localStorage.getItem('last_name');
      if (firstName !== null && lastName !== null) {
        setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
      }
    }
  }, []);

  // useEffect(() => {
  //   const user_id = localStorage.getItem('id');
  //   const res = getEditdata(user_id).then((res) => {
  //     setadditionalData(res.data);
  //     //console.log(res);
  //   });
  // }, []);

  return (
    <>
      <header className="header-head dasktop-view">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" href="/index"><img src={process.env.NEXT_PUBLIC_BASE_URL + "assets/images/logo-white.png"} alt="logo-white" className="logo dasktop" /></Link>
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
                {isAuthenticated ? <li className="nav-item">
                  <Link className="nav-link" href="/user/search">Search Reviews</Link>
                </li> : ''}
              </ul>
              <ul className="navbar-nav ms-auto mb-lg-0 tab-mobile-menu">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/index">
                    <i className="fa-solid fa-house" />
                    Home</Link>
                </li>
                {isAuthenticated ? <li className="nav-item">
                  <Link className="nav-link" href="/user/search">
                    <i className="fa-solid fa-magnifying-glass" />
                    Search Reviews</Link>
                    </li> : ''}
                <li className="nav-item">
                  <Link className="nav-link" href="/About">
                    <i className="fa-solid fa-question" />
                    About Bungee</Link>
                </li>
                {isAuthenticated ? <li className="nav-item">
                  <Link className="nav-link" href="/user/MyAccount">
                    <i className="fa-solid fa-user" />
                    View your profile</Link>
                    </li> : ''}
              </ul>

              {isAuthenticated ? <form className="d-flex">
                {/* <a href="#" className="btn btn-all header-btn" onClick={handleLogout}>Logout</a> */}
              </form> : <form className="d-flex">
                <a href="/Login" className="btn btn-all header-btn" > Login</a>
              </form>}
              {isAuthenticated ? <form className="d-flex">
                <Link href="/user/MyAccount"><div className="btn btn-all header-btn top-header-btn set" > {initialName}</div></Link>

                {/* <a href="#" style={style} className="btn btn-all header-btn top-header-btn set">
                  {additionalData?.set_name ?? initialName}
                </a> */}
              </form> : <form className="d-flex">
              </form>}

            </div>
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL + "assets/images/logo-white.png"} alt="logo-white" className="logo mobile-view" /></a>
            <div className="user-profile mobile-view">
              {isAuthenticated ? (
                <a href="MyAccount" className="btn btn-all header-btn top-header-btn">
                  {initialName}
                </a>
              ) : (
                <form className="d-flex">
                  <a href="/Login" className="btn btn-all header-btn top-header-btn" style={{ fontSize: "12px" }}>
                    Login
                  </a>
                </form>
              )}
            </div>

          </nav>
        </div>
      </header>
    </>
  )
}