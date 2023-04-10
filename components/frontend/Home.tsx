import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
export default function Home(): JSX.Element{
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // alert(localStorage.getItem('id'))
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    if (token && id) {
      setIsAuthenticated(true);
    }
  }, []);
    return(
        <>
           <section className="section-part ">
          <div className="container"> 
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1000}>Bringing transparency to the workplace.</h1>
            {isAuthenticated ? (
  <div className="row pt-3 mt-5">
    <div className="col-sm-6 col-6 text-right">
      <p className="button-info">
        <Link href="/user/MyAccount" className="btn-all">My Account</Link>
      </p>
    </div>
    <div className="col-sm-6 col-6 text-left">
      <p className="button-info">
        <Link href="/user/search" className="btn-all">Search Reviews</Link>
      </p>
    </div>
  </div>
) : (
  <div className="row pt-3 mt-5">
    <div className="col-sm-6 col-6 text-right">
      <p className="button-info">
        <Link href="/Login" className="btn-all">Login</Link>
      </p>
    </div>
    <div className="col-sm-6 col-6 text-left">
      <p className="button-info">
        <Link href="/SignUp" className="btn-all">Sign up</Link>
      </p>
    </div>
  </div>
)}
          </div>
        </section> 
        <section className="about-part bg-eee">
          <div className="container"> 
            <p>Bungee is purpose-built for finance professionals to provide anonymous feedback about coworkers. Work life balance and group culture are both heavily impacted by bosses and peers, creating a large unknown element to switching firms or groups. Our mission is to take the guess work out of switching firms by providing users with a vast dataset of information on their current and future colleagues.</p>
          </div>
        </section>
        </>
    )
}