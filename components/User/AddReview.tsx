import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getUserProfileData, submitReview, } from "../../lib/backendapi";
import { useRouter } from "next/router";
import { log } from "console";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function AddReview() {
  const router = useRouter();
  const { slug } = router.query;

  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const [userId, setuserId] = useState("");

  const [initialName, setInitialName] = useState('');

  const [user, SetUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    position_title: "",
    rating: 0,
  });

  useEffect(() => {
    if (!slug) return;
    getUserProfileData(slug)
      .then((res) => {
        if (res.status) {
          SetUserData(res.data);
          setuserId(res.data.id);
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
  }, [slug])


  const { first_name, last_name } = user;
  const getInitials = () => {
    if (!first_name || !last_name) return '';
    return `${first_name.charAt(0).toUpperCase()}${last_name.charAt(0).toUpperCase()}`;
  };

  const onSubmit = async () => {
    const current_user_data = getCurrentUserData();
    console.log(current_user_data);

    if (!current_user_data) return;
    const body = {
      review_by: current_user_data?.id,
      review_to: userId,
      description,
      total_rating: user.rating,
      //avg_rating: 3
    }
    console.log(body);
    submitReview(body).then((res) => {


      if (res.status) {
        //alert(res.message);
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000
        });
        router.push("/user/search")
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    })
      .catch((err) => {
        //   alert(err?.response?.data?.message)
        toast.error(err?.response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }

  const handleChange = (event) => {
    console.log(user)
    const { name, value } = event.target;
    SetUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }


  const handleStarHover = (num) => {
    const starColor = num > 0 ? "yellow" : "gray";
    const stars = document.querySelectorAll(".fa-star");
    stars.forEach((star, index) => {
      star.style.color = index < num ? starColor : "gray";
    });
  };

  const handleStarClick = (num) => {
    SetUserData((prevState) => {
      return {
        ...prevState,
        rating: num || 0,
      };
    });
  };

  return (
    <>
      <form>
        <section className="edit-part section-sp">
          <div className="container">
            <div className="button-part text-right">
              <button className="edit-btn    Cancel">  Cancel</button>
              <button type="button" onClick={onSubmit} className="edit-btn Save changes">Submit</button>
            </div>
          </div>
        </section>
        <section className="profile-part">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="user-pro">
                  {/* <a href="#" className="edit-img"><img src="/assets/images/user.png" alt="user" className="user" /> </a> */}
                  <a href="" className="btn btn-all header-btn add-image-btn">{getInitials()}</a>
                </div>
              </div>
              <div className="col-sm-6 text-right">
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6">
                <div className="form-blue">
                  <label>First Name</label>
                  <input value={user.first_name} type="text" placeholder="First Name" readOnly />
                  <label>Last Name</label>
                  <input value={user.last_name} type="text" placeholder="Last Name" readOnly />
                </div>

                <div className="row">
                  {/* <div className="col-6 text-left">
               <p className="star-list blue-star" id="star-color">
                {[1, 2, 3, 4, 5].map((num) => (
                <i
              key={num}
              className={`fa${num <= user.rating ? 's' : 'r'} fa-star`}
              onClick={() => handleStarClick(num)}
            />
          ))}
        </p>
      </div> */}
                  <div className="col-6 text-left">
                    <p className="star-list blue-star" id="star-color">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <i
                          key={num}
                          className={`fa${num <= (user.rating || 0) ? 's' : 'r'} fa-star`}
                          onMouseEnter={() => handleStarHover(num)}
                          onMouseLeave={() => handleStarHover(0)}
                          onClick={() => handleStarClick(num)}
                        />
                      ))}
                    </p>
                  </div>
                  <div className="col-2" />
                  <div className="col-2">
                    <p className="overall" style={{ color: "#fff" }}>Overall rating:</p>
                  </div>
                  <div className="col-2 rating-view" id="bbcolor">
                    <h4>
                      <input type="hidden" name="total_rating" onChange={handleChange} />
                      <span>{user.rating || 0}</span>/5
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-blue">
                  <label>Company Name</label>
                  <input type="text" placeholder="Credit Suisse" value={user.group_name} readOnly />
                  <label>Group Name</label>
                  <input type="text" value={user.company_name} placeholder="IBCM Technology" readOnly />
                  <label>Position Title</label>
                  <input type="text" value={user.position_title} readOnly />
                </div>
              </div>
            </div>
            <div className="row below">
              <div className="col-lg-6 col-md-6  "><label>Please provide your feedback below</label></div>
              <div className="col-sm-12">
                <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Write your review here" className="write-review" value={description} />
              </div>
            </div>
            <ToastContainer />
          </div>
        </section>
      </form>
    </>
  )
}