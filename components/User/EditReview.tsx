import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getUserProfileData, SingleReview, submitReview, UpdateReview } from "../../lib/backendapi";
import { useRouter } from "next/router";
import { log } from "console";
import '@fortawesome/fontawesome-free/css/all.min.css';


type CurrentUserData = {
  id: number; // Or whatever type `id` is
  // Add any other properties that `current_user_data` might have
}
interface User {
  id:string;
  first_name: string;
  last_name: string;
  rating: number;
  company_name: string;
  group_name: string;
  position_title: string;
  reviewId: string;
  starData: number[];
  total_rating:number; // array of star ratings
}

export default function AddReview() {
  const router = useRouter();
  const { reviewId } = router.query;

  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const [userId, setuserId] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(user?.rating ?? 0);
  const [initialName, setInitialName] = useState('');
  const [users, SetUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    position_title: "",
    rating: 0,
    id: "",
    description: ""
  });

  useEffect(() => {
    const res = SingleReview(reviewId).then((res) => {
      console.log(res);
      setUser(res.data);
      setDescription(res.data.description)
      setReview(res.data.reviewId);
      setRating(res.data.total_rating);
    });
  }, [reviewId]);

  const { first_name, last_name } = user ?? { first_name: '', last_name: '' };
  const getInitials = () => {
    if (!first_name || !last_name) return '';
    return `${first_name.charAt(0).toUpperCase()}${last_name.charAt(0).toUpperCase()}`;
  };

  const onSubmit = async () => {
    if (!user || !review) {
      return false;
    }
    const body = {
      id: review,
      description,
      total_rating: rating,
    };
    try {
      const res = await UpdateReview(body);
      if (res.status) {
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        setTimeout(() => {
        router.push("/user/EditProfile");
        }, 3000);
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err: any) {
      const errorMessage =
        err.message || "An error occurred while updating the review.";
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  
  const handleChange = (event: any) => {
    //console.log(user)
    const { name, value } = event.target;
    SetUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const handleStarHover = (num: number) => {
    const starColor = num > 0 ? "yellow" : "gray";
    const stars = document.querySelectorAll(".fa-star");
    stars.forEach((star, index) => {
      (star as HTMLElement).style.color = index < num ? starColor : "gray";
    });
  };

  const handleStarClick = (num: number) => {
    setRating(num);
  };

  return (
    <>
      <form>
        <section className="edit-part section-sp">
          <div className="container">
            <div className="button-part text-right">
              {/* <button className="edit-btn    Cancel">  Cancel</button> */}
              <Link href="/user/EditProfile"
                className="edit-btn st Cancel">Cancel
              </Link>
              <button type="button" onClick={onSubmit} className="edit-btn Save changes">Submit</button>
            </div>
          </div>
        </section>
        <section className="profile-part">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="user-pro">
                  <a href="" className="btn btn-all header-btn add-image-btn">
                    {getInitials()}
                  </a>
                </div>
              </div>
              <div className="col-sm-6 text-right"></div>
            </div>

            <div key={user?.id} className="row mt-5">
              <div className="col-sm-6">
                <div className="form-blue">
                  <label>First Name</label>
                  <input
                    value={user?.first_name ?? ""}
                    type="text"
                    placeholder="First Name"
                    readOnly
                  />

                  <label>Last Name</label>
                  <input
                    value={user?.last_name ?? ""}
                    type="text"
                    placeholder="First Name"
                    readOnly
                  />

                </div>
                <div className="row">
                  <div className="col-6 text-left">
                    <p className="star-list blue-star" id="star-color">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <i
                          key={num}
                          className={`fa${num <= rating ? "s" : "r"} fa-star`}
                          onMouseEnter={() => handleStarHover(num)}
                          onMouseLeave={() => handleStarHover(0)}
                          onClick={() => handleStarClick(num)}
                        />
                      ))}
                    </p>
                  </div>
                  <div className="col-2" />
                  <div className="col-2">
                    <p className="overall" style={{ color: "#fff" }}>
                      Overall rating:
                    </p>
                  </div>
                  <div className="col-2 rating-view" id="bbcolor">
                    <h4>
                      <input
                        type="hidden"
                        name="total_rating"
                        onChange={handleChange}
                        value={rating}
                      />
                      <span>{rating}</span>/5
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-blue">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Credit Suisse"
                    value={user?.group_name ?? ""}
                    readOnly
                  />

                  <label>Group Name</label>
                  <input
                    type="text"
                    value={user?.company_name || ""}
                    placeholder="IBCM Technology"
                    readOnly
                  />
                  <label>Position Title</label>
                  <input
                    type="text"
                    value={user?.position_title || ""}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="row below">
              <div className="col-lg-6 col-md-6  ">
                <label>Please provide your feedback below</label>
              </div>
              <div className="col-sm-12">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write your review here"
                  className="write-review"
                  value={description}
                />
              </div>
            </div>
            <ToastContainer />
          </div>
        </section>
      </form>
    </>
  )
}