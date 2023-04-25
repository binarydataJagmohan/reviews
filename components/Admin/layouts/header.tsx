/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';
import axios from "axios";
import { removeToken, removeStorageData, getCurrentUserData } from "../../../lib/session";
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

  return (
    <>
      <header className="header-head dasktop-view">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" href="/admin/all-users"><img src={process.env.NEXT_PUBLIC_BASE_URL + "assets/images/logo-white.png"} alt="logo-white" className="logo dasktop" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-lg-0 dasktop-menu">

                {isAuthenticated && user_type == 'admin' ?
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/admin/all-users">All Users</a>
                  </li>
                  : ''}

                {isAuthenticated && user_type == 'admin' ?
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/admin/all-review">All Reviews</a>
                  </li>
                  : ''}

                {isAuthenticated && user_type == 'admin' ?
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/admin/user-merge">User Merge</a>
                  </li>
                  : ''}

              </ul>
              {isAuthenticated && user_type == 'admin' ? <form className="d-flex">
              </form> : <form className="d-flex">
                <a href="/Login" className="btn btn-all header-btn" > Login</a>
              </form>}

              {isAuthenticated && user_type == 'admin' ?
                <form className="d-flex">
                  <Link href="/admin/my-account"><div className="btn btn-all header-btn top-header-btn set" > {initialName}</div></Link>
                </form> : <form className="d-flex">
                </form>}

            </div>
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL + "assets/images/logo-white.png"} alt="logo-white" className="logo mobile-view" /></a>
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