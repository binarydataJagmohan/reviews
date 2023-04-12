import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getUserProfileData, submitReview, } from "../../lib/backendapi";
import { useRouter } from "next/router";
import { log } from "console";


export default function AddReview() {
  const router = useRouter();
  const { userId } = router.query;
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const [user, SetUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    position_title: "",
  });

  useEffect(() => {
    if (!userId) return;
    getUserProfileData(userId)
      .then((res) => {
        if (res.status) {
          SetUserData(res.data);
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
  }, [userId])


  const onSubmit = async () => {
    const current_user_data = getCurrentUserData();
    console.log(current_user_data.id );
    
    if (!current_user_data) return;
    const body = {
      review_by: current_user_data?.id,
      review_to: userId,
      description,
      total_rating: 5,
      avg_rating: 3
    }
    submitReview(body).then((res) => {
      if (res.status) {
        alert(res.message);
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push("/user/search")
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    })
      .catch((err) => {
        alert(err?.response?.data?.message)
        toast.error(err?.response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });;
  }

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
                  <a href="#" className="edit-img"><img src="/assets/images/user.png" alt="user" className="user" /> </a>
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
          </div>
        </section>
      </form>
    </>
  )
}