import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getUserProfileDatabyid, LikeReview, getEditdata } from "../../lib/backendapi";
import Tippy from "@tippyjs/react";
import { parseISO, format } from 'date-fns';



interface Review {
  first_name: string;
  group_name: string;
  company_name: string;
  position_title: string;
  description: string;
  avg_rating: number;
  thumbs_up: number;
  thumbs_down: number;
  review_id: number;
  created_at:string;
  bunjee_score:number;
  id: number;
  review_by:number;
  review_to:number;
  total_rating:string;
}

export default function MyAccount() {

  const current_user_data = getCurrentUserData();
  const [initialName, setInitialName] = useState('');
  const [reviews, setreviews] = useState([]);
  const [likeds, setLiked] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [additionalData, setadditionalData] = useState<{ set_name: string, font_color: string, background_color: string }[]>([]);
  // const barRef = useRef(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentageTagRef = useRef<HTMLDivElement>(null);

  // const percentageTagRef = useRef(null);
  const differenceTagRef = useRef(null);
  const [difference, setDifference] = useState(0);
  
  const [user, SetUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    position_title: "",
    id:"",
    set_name:"",
    font_color:"",
    background_color:""

  });

  const handleLike = (e:any, like:any, id:any) => {
    e.preventDefault();
    const data = { isLiked: like, reviewId: id, userId: user.id };
    // return false;
    LikeReview(data).then((res) => {
      // this.review.thumbs_up(res.data.thumbs_up)
      //console.log(res)
      if ('id' in current_user_data) {
      getUserProfileDatabyid(current_user_data.id)
        .then((res) => {
          if (res.status === true) {
            SetUserData(res.data);
            setreviews(res.reviews);
            // setreviews(res.reviews1);
            console.log(res.reviews);
          } else {
            toast.error(res.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
      }
    });
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (token && id) {
      setIsAuthenticated(true);
      const firstName = localStorage.getItem('first_name');
      const lastName = localStorage.getItem('last_name');
      if (firstName !== null && lastName !== null) {
      setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
      }
    }
    const current_user_data = getCurrentUserData();
    if ('id' in current_user_data) {
      getUserProfileDatabyid(current_user_data.id)
        .then((res) => {
          if (res.status === true) {
            SetUserData(res.data);
            setreviews(res.reviews);
            console.log(res.reviews);
            if (barRef.current) {
              barRef.current.style.width = (res.data.bunjee_score || 0) + '%';
              if (percentageTagRef.current) {
                percentageTagRef.current.innerHTML = res.data.bunjee_score || 0;
              }
            }
                   
            // barRef.current.style.width = (res.data.bunjee_score || 0) + '%';
            // percentageTagRef.current.innerHTML = res.data.bunjee_score || 0
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

  useEffect(() => {
    const user_id = localStorage.getItem('id');
    const res = getEditdata(user_id).then((res) => {
      setadditionalData(res.data);
      console.log(res);
    });
  }, []);

  function redirectToLogin() {
    window.location.href = '/Login';
  }

  function handleLogout(e:any) {
    e.preventDefault();
    removeToken();
    removeStorageData();
    redirectToLogin();
  }

  return (
    <>
      <section className="edit-part section-sp">
        <div className="container">
          <div className="button-part text-right">
            <Link href="/user/EditProfile" className="edit-btn chng"><i className="fa-solid fa-user-pen" /> Edit profile</Link>
            <button className="edit-btn" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" /> Log out</button>
          </div>
        </div>
      </section>
      <section className="profile-part">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="user-pro account-big">
                {/* <a href="#" style={{ 'color': additionalData.font_color, 'background': additionalData.background_color }} className="btn btn-all header-btn add-image-btn">
                  {additionalData.set_name != null || "" ? additionalData.set_name : initialName}
                </a> */}
                 <a href="#" style={{ 'color': additionalData.length > 0 ? additionalData[0].font_color : '', 'background': additionalData.length > 0 ? additionalData[0].background_color : '' }} className="btn btn-all header-btn add-image-btn">
                    {additionalData.length > 0 && additionalData[0].set_name != null && additionalData[0].set_name !== "" ? additionalData[0].set_name : initialName}
                  </a>
                <h2>{user.first_name + ' ' + user.last_name} </h2>
                <h3>{user.group_name}</h3>
                <h3>{user.company_name}</h3>
                <h3>{user.position_title}</h3>
              </div>
            </div>
            <div className="col-sm-5 text-right">
              <div className="container">
                <div className="status-info position-relative">
                  <h1 className="title Meter" style={{ color: '#fff' }}>Bungee meter</h1>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="width-same">-100</div>
                    <div className="bar-wrap w-100">
                      <div className="bar" ref={barRef}></div>
                    </div>
                    <div className="width-same">100</div>
                  </div>
                  <span className="percentage" ref={percentageTagRef}></span>
                  <Tippy content={
                    <div style={{ background: 'black', padding: '15px', textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}>
                      <span style={{ color: 'white', height: '90px', fontSize: '12px' }}>
                        The Bungee meter is meant to show how agreeable your reviews are and ranges from -100 to 100. When you post reviews, users will see your bungee score at the time of posting
                      </span></div>}>
                    <div className="i-tool-tip">
                      <i className="fa-solid fa-info "></i>
                    </div>
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-reviews section-sp">
        <div className="container">
          <h1>My reviews</h1>
          {/* {reviews.length > 0 ? (
            reviews.map((review) => ( */}
          {reviews && reviews.length > 0 && reviews.map((review: Review, index: number) => (
              // eslint-disable-next-line react/jsx-key
              <div className="main_box mt-4">
                <div className="row">
                  <div className="col-sm-8 col-7">
                    <h4>{review.first_name}</h4>
                    <h4>{review.group_name} | {review.company_name}</h4>
                    <h4>{review.position_title}</h4>
                  </div>
                  <div className="col-sm-4  col-5 text-right ">
                    <h6 className="date-time">{format(parseISO(review.created_at), 'M/d/yy HH:mm ')}ET<span> #{review.bunjee_score}</span> </h6>
                    <p><a href="#" className="what">What’s this?</a></p>
                    {(review.id === review.review_to) && (
                        <a href={`/user/edit-review?reviewId=${review.review_id}`}>
                          <i className="fas fa-edit edit-set" />
                        </a>
                          )}
                 
                  </div>
                  <div className="col-sm-4 col-5 text-right ">
                    <div className="del-icon">
                      {/* <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-trash" />
                  </a> */}
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
                      <div className="col-lg-4 col-md-3 col-5 ">
                        <h4 className="overall-rating">Overall rating:</h4>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 ">
                        <p className="rating">
                          <span>{review.total_rating}</span>/5
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-lg-8 col-md-6 col-2" />
                      <div className="col-lg-2 col-md-3 col-5">
                        <p className="thum thum-up" onClick={(e) =>
                          handleLike(e, 1, review.review_id)
                        }>
                          <i className="fa-solid fa-thumbs-up" /> {review.thumbs_up}
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-3 col-5">
                        <p className="thum thum-down" onClick={(e) =>
                          handleLike(e, 0, review.review_id)
                        }>
                          {" "}
                          <i className="fa-solid fa-thumbs-down" /> {review.thumbs_down}
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
  )
}