import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {removeToken,removeStorageData,getCurrentUserData,} from "../../lib/session";
import {saveAdminProfileData,getUserProfileData, LikeReview,} from "../../lib/backendapi";

export default function EditProfile() {
  const [initialName, setInitialName] = useState('');
  const [reviews, setreviews] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, SetUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    position_title: "",
  });

  const handleLike = (e, like,id) => {
    e.preventDefault();
    const data = {isLiked:like,reviewId:id,userId:user.id};
    // return false;
    LikeReview(data).then((res)=>{
      // this.review.thumbs_up(res.data.thumbs_up)
      console.log(res)
      setreviews(res.data);
    });
  }
  

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
            setreviews(res.reviews);
            setreviews(res.reviews1);
            console.log(res.reviews);
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.first_name ||
      !user.last_name ||
      !user.group_name ||
      !user.company_name ||
      !user.position_title
    ) {
      toast.error("Please fill in all the required fields");
      return;
    }

    try {
      const res = await saveAdminProfileData(user);
      console.log(res);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location.href = "/user/search";
    } catch (err) {
      toast.error("Error occurred", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  

  return (
    <>
      <form action="" className="main-form" onSubmit={handleSubmit}>
        <section className="edit-part section-sp">
          <div className="container">
            <div className="button-part text-right">
              <button className="edit-btn    Cancel"> Cancel</button>
              <button className="edit-btn Save changes"> Save changes</button>
            </div>
          </div>
        </section>

        <section className="profile-part">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="user-pro">
                <a href="#" className="btn btn-all header-btn add-image-btn">
                    {/* <img
                      src="/assets/images/user.png"
                      alt="user"
                      className="user"
                    />{" "} */}
                    {initialName}
                    {/* <i className="fa-solid fa-user-pen" /> */}
                  </a>
                </div>
              </div>
              <div className="col-sm-6 text-right"></div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6">
                <div className="form-blue">
                  <label>Edit First Name</label>
                  <input
                    type="text"
                    value={user.first_name}
                    onChange={handleChange}
                    name="first_name"
                  />
                  <label>Edit Last Name</label>
                  <input
                    type="text"
                    value={user.last_name}
                    onChange={handleChange}
                    name="last_name"
                  />
                  <label>Edit Email</label>
                  <input type="text" value={user.email} readOnly />
                  <div className="show-fild">
                    <label>Change Password</label>
                    <input type="password" value={user.view_password} readOnly/>
                    <p className="show">
                      <a href="#">Show</a>
                    </p>
                  </div>
                  <div className="show-fild">
                    <label>Confirm New Password</label>
                    <input type="password" value={user.view_password} readOnly/>
                    <p className="show">
                      <a href="#">Show</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-blue">
                  <label>Edit Company Name</label>
                  <input type="text" onChange={handleChange} name="company_name" value={user.company_name} />
                  <label>Edit Group Name</label>
                  <input type="text" onChange={handleChange} name="group_name" value={user.group_name} />
                  <label>Edit Position Title</label>
                  <input type="text" value={user.position_title} onChange={handleChange} name="position_title" />
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      </form>
      <section className="my-reviews section-sp">
        <div className="container">
          <h1>My reviews</h1>
          {reviews.map((review)=>(
            <div className="main_box mt-4">
            <div className="row">
              <div className="col-sm-8 col-7">
                <h4>{review.first_name}</h4>
                <h4>{ review.group_name} | { review.company_name}</h4>
                <h4>{ review.position_title}</h4>
              </div>
              <div className="col-sm-4 col-5 text-right ">
                <div className="del-icon">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-trash" />
                  </a>
                </div>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {" "}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body pop-des">
                        <h3>Are you sure you want to delete this review?</h3>
                        <p>
                          {" "}
                          If deleted, this review will not be able to be
                          recovered. Deleting reviews does not impact your
                          bungee score.{" "}
                        </p>
                      </div>
                      <div className="modal-footer j-cebter">
                        <button
                          type="button"
                          className="btn edit-btn  Save changes"
                          data-bs-dismiss="modal"
                        >
                          Yes
                        </button>
                        <button type="button" className="btn edit-btn  Cancel">
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              {review.description}
            </p>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-5 ">
                    <h4 className="overall-rating">Overall rating:</h4>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 ">
                    <p className="rating">
                      <span>{review.avg_rating}</span>/5
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-2" />
                  <div className="col-lg-2 col-md-3 col-5">
                    <p className="thum thum-up" onClick={e => handleLike(e,1,review.id)}>
                      <i className="fa-solid fa-thumbs-up" /> { review.thumbs_up }
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-3 col-5">
                    <p className="thum thum-down" onClick={e => handleLike(e,0,review.id)}>
                      {" "}
                      <i className="fa-solid fa-thumbs-down" /> { review.thumbs_down }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
         
        </div>
      </section>
    </>
  );
}