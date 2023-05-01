import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';

import { removeToken, removeStorageData, getCurrentUserData } from "../../../lib/session";

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
            <li><Link href="/index">Home</Link></li>
            <li><Link href="/user/MyAccount">My Account</Link></li>
            <li><Link href="/user/search">Search Review</Link></li>
            <li><Link href="/About">About us</Link></li>
          </ul>
        </div>
      </footer>): ( <footer className="footer-part">
        <div className="container">
          <ul>
            <li><Link href="/index">Home</Link></li>
            <li><Link href="/Login">Login</Link></li>
            <li><Link href="/SignUp">Sign up</Link></li>
            <li><Link href="/About">About us</Link></li>
          </ul>
        </div>
      </footer>)
              }  
          
        </div>
    )
}
