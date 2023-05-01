import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { register } from '../../lib/frontendapi';
import { removeToken, removeStorageData, getCurrentUserData } from "../../lib/session";
import { saveAdminProfileData, getUserProfileData, newuserreview, } from "../../lib/backendapi";
import { FormEvent } from 'react';



export default function NewUserReview() {

  const [errorMessage, setErrorMessage] = useState('');
  // const [rating, setRating] = useState(0);
  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    postion_title: "",
    description: "",
    total_rating: "",
    rating: 0,
    review_by: '',
    id:"",
  });

  const handleChange = (event: any) => {
    console.log(user)
    const { name, value } = event.target;
    setuser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const router = useRouter();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const current_user_data = getCurrentUserData() as { id: string };
    if ('id' in current_user_data) {
      user.review_by = current_user_data?.id;
      if (!current_user_data) return;
      if (user.first_name === '') {
        toast.error('Please enter your name.', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      if (user.last_name === '') {
        toast.error('Please enter your last name.', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      if (user.description === '') {
        toast.error('Please enter your description.', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      const body = {
        review_by: current_user_data?.id,
        // review_to: userId,
      };
      newuserreview(user)
        .then((res) => {
          if (res.status == true) {
            toast.success(res.message, {
              position: toast.POSITION.TOP_RIGHT,
              onClose: () => {
                router.push('/user/search');
              },
            });
          }  else {
            let errors = res.errors;
            let errorMessage = '';
            for (let error in errors) {
              errorMessage += errors[error];
            }
            toast.error(errorMessage, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  
  const handleStarClick = (num:any) => {
    setuser((prevState) => {
      return {
        ...prevState,
        rating: num,
      };
    });
  };
  return (
    <>
      <section className="form-part ">
        <div className="container">
            <form className="form-center w-60" onSubmit={handleSubmit}>
            <h2>Thanks for helping the community! Please provide your feedback below. </h2>
            <label className="mt-4 mb-3"><b>Who are you writing a review on?</b></label>
            <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} />
            <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} />
            <label className="mb-2"><b>What is their position?</b></label>
            <input type="text" placeholder="Company Name" name="company_name" onChange={handleChange} />
            <input type="text" placeholder="Group Name" name="group_name" onChange={handleChange} />
            <input type="text" placeholder="Position Title" name="position_title" onChange={handleChange} />
            <label className="mb-2"><b>Tell us how you feel about this person…</b></label>
            <textarea placeholder="Write your review here" className="write-review" onChange={handleChange} name="description" />
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
                  {[1, 2, 3, 4, 5].map((num) => (
                    <i
                      key={num}
                      className={`fa${num <= user.rating ? 's' : 'r'} fa-star`}
                      onClick={() => handleStarClick(num)}
                    />
                  ))}
                </p>
              </div>

              <div className="col-2" />
              <div className="col-2">
                <p className="uverall">Overall rating:</p>
              </div>
              <div className="col-2 rating-view blue-black">
                <h4>
                  <input type="hidden" name="total_rating" onChange={handleChange} />
                  <span>{user.rating}</span>/5
                </h4>
              </div>
            </div>

            <section className="edit-part section-sp">
              <div className="container">
                <div className="button-part text-right">
                  <button className="edit-btn    Cancel"> Cancel</button>
                  <button type="submit" className="edit-btn Save-changes" >save changes</button>
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