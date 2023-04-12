import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getLatestReviews, getUserProfileData, } from "../../lib/backendapi";
import { useRouter } from "next/router";
import { format, parseISO, isValid } from 'date-fns';

export default function ViewProfile()
{
  const router = useRouter();
  const { userId } = router.query;
  const [user, SetUserData] = useState([

  ]);
  const [reviews, SetReview] = useState([]);
  const [initialName, setInitialName] = useState('');

  useEffect(() => {
    if (!userId) return; 
    getUserProfileData(userId)
      .then((res) => {
        console.log(res)
        if (res.status === true) {
          SetUserData(res.data);
          SetReview(res.reviews);
          console.log(reviews)
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
  }, []);

  const { first_name, last_name } = user; 
  const getInitials = () => {
    if (!first_name || !last_name) return '';
    return `${first_name.charAt(0).toUpperCase()}${last_name.charAt(0).toUpperCase()}`;
  };

  

    return(
        <>
          <section className="edit-part section-sp">
          <div className="container"> 
            <div className="button-part text-right"> 
              <a href={`/user/AddReview?userId=${userId}`} className="edit-btn Save changes" ><i className="fa-solid fa-user-pen"  /> Add review</a>
            </div>
          </div>
        </section>
        <section className="profile-part">
          <div className="container"> 
            <div className="row">
              <div className="col-sm-8">
                <div className="user-pro">
                  {/* <img src={process.env.NEXT_PUBLIC_BASE_URL+"assets/images/user.png"} alt="user" className="user" /> */}
                  <a href="" id="topjs" className="btn btn-all header-btn add-image-btn">{getInitials()}</a>
                  <h2>{user.first_name+ " "+user.last_name }</h2>
                  <h3>{user.group_name}</h3>
                  <h3>{user.company_name}</h3>
                  <h3>{user.position_title}</h3>
                </div>
              </div>
              <div className="col-sm-4 text-right">
                <div className="rating-view text-center mt-4">
                  <h4><span>4</span> / 5</h4>
                  <p className="star-list">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </p>
                  <p>Based on 2 total reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-reviews section-sp">
          <div className="container"> 
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Most recent</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Most liked</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">By Bungee score</button>
              </li> 
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">  
                
                {reviews.map((review)=>(
                    <div className="main_box mt-5">
                    <div className="row">
                      <div className="col-sm-6 col-5  ">
                        <h6 className="date-time"><b>{isValid(parseISO(review.created_at)) ? format(parseISO(review.created_at), 'M/d/yy HH:mm ') + 'ET' : 'Invalid date'} |<span> #{review.id}</span> <a href="#" className="what">What’s this?</a></b> </h6>
                        <p />
                      </div>
                      <div className="col-sm-6 col-7 text-right">
                        <p>{review.group_name} | {review.company_name} | {review.position_title}</p>
                      </div>               
                    </div>
                    <p>{review.description}</p>
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
              <p className="thum thum-down"> <i className="fa-solid fa-thumbs-down" /> 2</p>
            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">2</div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">3</div>
              <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">4</div>
            </div>
          </div>
        </section>
        </>
    )
}