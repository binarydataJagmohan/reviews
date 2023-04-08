import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {removeToken,removeStorageData,getCurrentUserData,} from "../../lib/session";
import {saveAdminProfileData,getUserProfileData,} from "../../lib/backendapi";


export default function AddReview()
{ 
   return(
    <>
      <section className="edit-part section-sp">
          <div className="container"> 
            <div className="button-part text-right">
              <button className="edit-btn    Cancel">  Cancel</button>
              <button className="edit-btn Save changes">Submit</button>
            </div>
          </div>
        </section> 
        <section className="profile-part">
          <div className="container"> 
            <div className="row">
              <div className="col-sm-6">
                <div className="user-pro">
                  <a href="#" className="edit-img"><img src="/assets/images/user.png" alt="user" className="user" /> </a> 
                </div>
              </div>
              <div className="col-sm-6 text-right"> 
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6">
                <form className="form-blue"> 
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </form>
              </div>
              <div className="col-sm-6">
                <form className="form-blue"> 
                  <label>Company Name</label>
                  <input type="text" placeholder="Credit Suisse" />
                  <label>Group Name</label>
                  <input type="text" placeholder="IBCM Technology" />
                  <label>Position Title</label>
                  <input type="text" /> 
                </form>
              </div>
            </div>
            <div className="row below">
              <div className="col-lg-6 col-md-6  "><label>Please provide your feedback below</label></div>
              <div className="col-sm-12">          
                <textarea placeholder="Write your review here" className="write-review" defaultValue={""} />
              </div>
            </div>
          </div>
        </section>
    </>
   )
}