import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {register} from '../../lib/frontendapi';
import { removeToken, removeStorageData,getCurrentUserData } from "../../lib/session";
import {saveAdminProfileData,getUserProfileData, newuserreview, } from "../../lib/backendapi";


export default function NewUserReview()
{

  const [errorMessage, setErrorMessage] = useState('');

  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    postion_title: "",
    description: "",
    total_rating : "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   

  const handleSubmit = async (e, userId) => {
    e.preventDefault();
    const current_user_data = getCurrentUserData();
    const body = {
      review_by: current_user_data?.id,
      review_to: userId,
     // description,
      total_rating: 5,
      avg_rating: 3
    }

    newuserreview(user)
	    .then(res => {
	    	if(res.status==true){
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,

          });
          window.location.href = '/user/search';
		    } else {
		    	let errors = res.errors;
          let errorMessage = "";
          for (let error in errors) {
            errorMessage += errors[error];
          }
          toast.error(errorMessage, {
            position: toast.POSITION.TOP_RIGHT,
          });
		      }
	    })
	    .catch(err => {
	        console.log(err);
	    });
    

  }


    return(
        <>
     <section className="form-part ">
        <div className="container"> 
          <form className="form-center w-60" onSubmit={handleSubmit}>
            <h2>Thanks for helping the community! Please provide your feedback below. </h2>
            <label className="mt-4 mb-3"><b>Who are you writing a review on?</b></label> 
            <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} /> 
            <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange}/>
            <label className="mb-2"><b>What is their position?</b></label>
            <input type="text" placeholder="Company Name" name="company_name" onChange={handleChange}/> 
            <input type="text" placeholder="Group Name" name="group_name" onChange={handleChange}/>
            <input type="text" placeholder="Position Title" name="position_title" onChange={handleChange}/>
            <label className="mb-2"><b>Tell us how you feel about this person…</b></label>
            <textarea placeholder="Write your review here" className="write-review" defaultValue={""} /> 
            <div className="row">
              <div className="col-sm-3 col-6">
                <div className="row">
                  <div className="col-lg-12 text-left ">
                    <h4 className="overall-rating">Overall rating</h4>
                    <p>Very difficult to work with</p>
                  </div> 
                </div>
              </div>
              <div className="col-1" />
              <div className="col-sm-3  col-5 mt-4 pt-2">
                Fantastic coworker
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-left"> 
                <p className="star-list blue-star">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </p> 
              </div> 
              <div className="col-2" />
              <div className="col-2">
                <p className="uverall">Overall rating:</p>
              </div>
              <div className="col-2 rating-view blue-black">
                <h4><span>3</span>/5</h4>
              </div>
            </div>

            <section className="edit-part section-sp">
          <div className="container">
            <div className="button-part text-right">
              <button className="edit-btn    Cancel"> Cancel</button>
              <button type="submit" className="edit-btn Save changes"> Save changes</button>
            </div>
          </div>
        </section>
          </form>
        </div>
        <ToastContainer />
      </section>
        </>
    )
}