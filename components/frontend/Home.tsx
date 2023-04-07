import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
<<<<<<< HEAD
export default function Home(): JSX.Element {

=======
export default function Home(): JSX.Element{
>>>>>>> 65d4f72bbff627725090e092365ec2b6059a0969
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // alert(localStorage.getItem('id'))
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    if (token && id) {
      setIsAuthenticated(true);
    }
  }, []);
<<<<<<< HEAD


  return (
    <>
      <section className="section-part ">
        <div className="container">
          <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1000}>Bringing transparency to the workplace.</h1>


          {isAuthenticated ? (
            <div className="row pt-3 mt-5">
              <div className="col-sm-6 col-6 text-right">
                <p className="button-info">
                  <Link href="/user/ViewProfile" className="btn-all">My Account</Link>
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
                  <Link href="/login" className="btn-all">Login</Link>
                </p>
              </div>
              <div className="col-sm-6 col-6 text-left">
                <p className="button-info">
                  <Link href="/signup" className="btn-all">Sign up</Link>
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
=======
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
        <Link href="/login" className="btn-all">Login</Link>
      </p>
    </div>
    <div className="col-sm-6 col-6 text-left">
      <p className="button-info">
        <Link href="/signup" className="btn-all">Sign up</Link>
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
>>>>>>> 65d4f72bbff627725090e092365ec2b6059a0969
}