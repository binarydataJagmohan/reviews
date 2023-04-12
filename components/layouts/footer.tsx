import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';

import { removeToken, removeStorageData, getCurrentUserData } from "../../lib/session";

export default function Footer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialName, setInitialName] = useState('');
  const router = useRouter();

  useEffect(() => {
    // alert(localStorage.getItem('id'))
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    if (token && id) {
      setIsAuthenticated(true);
    }
  }, []);
    return (

      
           <div>
             {isAuthenticated ? ( <footer className="footer-part">
        <div className="container">
          <ul>
            <li><a href="/index">Home</a></li>
            <li><a href="/user/MyAccount">My Account</a></li>
            <li><a href="/user/search">Search Review</a></li>
            <li><a href="/About">About us</a></li>
          </ul>
        </div>
      </footer>): ( <footer className="footer-part">
        <div className="container">
          <ul>
            <li><a href="/index">Home</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/SignUp">Sign up</a></li>
            <li><a href="/About">About us</a></li>
          </ul>
        </div>
      </footer>)
              }  
          
        </div>
    )
}
