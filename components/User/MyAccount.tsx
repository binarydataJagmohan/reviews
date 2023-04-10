import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {removeToken,removeStorageData,getCurrentUserData,} from "../../lib/session";
import {saveAdminProfileData,getUserProfileData,} from "../../lib/backendapi";

export default function MyAccount() {
  
  const [initialName, setInitialName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, SetUserData] = useState({

  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (token && id) {
      setIsAuthenticated(true);
      const firstName = localStorage.getItem('first_name');
      const lastName = localStorage.getItem('last_name');
      setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
      
    }

    const current_user_data = getCurrentUserData();
    if (current_user_data.id !== null) {
      getUserProfileData(current_user_data.id)
        .then((res) => {
          if (res.status === true) {
            SetUserData(res.data);
            console.log(res.data);
          } else {
            toast.error(res.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
        .catch((err) => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    } else {
      window.location.href = "/Login";
    }
  }, []);

  function redirectToLogin() {
    window.location.href = '/Login';
}

  function handleLogout(e) {
    e.preventDefault();
    removeToken();
    removeStorageData();
    redirectToLogin();
}
  
    return(
        <>
        
         <section className="edit-part section-sp">
          <div className="container"> 
            <div className="button-part text-right">
              <Link href="/user/EditProfile" className="edit-btn"><i className="fa-solid fa-user-pen" /> Edit profile</Link>
              <button className="edit-btn" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" /> Log out</button>
            </div>
          </div>
        </section> 
        <section className="profile-part">
          <div className="container"> 
            <div className="row">
              <div className="col-sm-6">
                <div className="user-pro account-big">
                <a href="#" className="btn btn-all header-btn add-image-btn">
                    {/* <img
                      src="/assets/images/user.png"
                      alt="user"
                      className="user"
                    />{" "} */}
                    {initialName}
                    {/* <i className="fa-solid fa-user-pen" /> */}
                  </a>
                  {/* <img src="/assets/images/user.png" alt="user" className="user" /> */}
                  <h2>{user.first_name+' '+user.last_name} </h2>
                  <h3>{user.group_name}</h3>
                  <h3>{user.compnay_name}</h3>
                  <h3>{user.position_title}</h3>
                </div>
              </div>
              <div className="col-sm-6 text-right">
                <img src="/assets/images/colors.png " alt="colors" />
              </div>
            </div>
          </div>
        </section> 
        <section className="my-reviews section-sp">
          <div className="container"> 
            <h1>My reviews</h1>
            <div className="main_box mt-4">
              <div className="row">
                <div className="col-sm-8 col-7">
                  <h4>Sameed Imran</h4>
                  <h4>Barclays | Investment Banking Technology</h4>
                  <h4>Vice President</h4>
                </div>
                <div className="col-sm-4  col-5 text-right ">
                  <h6 className="date-time">3/5/23 14:35 ET |<span> 75</span> </h6>
                  <p><a href="#" className="what">What’s this?</a></p>
                </div> 
              </div>
              <p>Used to work with this guy and he is very aggressive in his expectations of you and timeline for deliverables.Very much a project manager but doesn’t actually have insightful thoughts to add. 
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-5 ">
                      <h4 className="overall-rating">Overall rating:</h4>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 ">
                      <p className="rating"><span>1</span>/5</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-2" />
                    <div className="col-lg-2 col-md-3 col-5">
                      <p className="thum thum-up"><i className="fa-solid fa-thumbs-up" /> 14</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-5">
                      <p className="thum thum-down"> <i className="fa-solid fa-thumbs-down" /> 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_box mt-5">
              <div className="row">
                <div className="col-sm-8 col-7">
                  <h4>Brandon Fiala</h4>
                  <h4>Credit Suisse | IBCM Technology</h4>
                  <h4>Analyst</h4>
                </div>
                <div className="col-sm-4 col-5 text-right ">
                  <h6 className="date-time">3/2/23 17:24 ET  |<span> 66</span> </h6>
                  <p><a href="#" className="what">What’s this?</a></p>
                </div> 
              </div>
              <p>Current colleague and can attest that Brandon is really hard working and good industry knowledge for an Analyst. Would be a great addition to any team!</p>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-5 ">
                      <h4 className="overall-rating">Overall rating:</h4>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 ">
                      <p className="rating"><span>5</span>/5</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-2" />
                    <div className="col-lg-2 col-md-3 col-5">
                      <p className="thum thum-up"><i className="fa-solid fa-thumbs-up" /> 7</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-5">
                      <p className="thum thum-down"> <i className="fa-solid fa-thumbs-down" /> 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}