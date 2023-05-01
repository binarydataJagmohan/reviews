import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getUserProfileDatabyid, LikeReview, getEditdata } from "../../lib/backendapi";
import Tippy from "@tippyjs/react";
import { parseISO, format } from 'date-fns';

interface EditData {
  font_color: string;
  background_color: string;
  set_name?: string | null;
}

export default function MyAccount() {

  const current_user_data = getCurrentUserData();
  const [initialName, setInitialName] = useState('');
  const [reviews, setreviews] = useState([]);
  const [likeds, setLiked] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [additionalData, setadditionalData] = useState([]);
  const [additionalData, setadditionalData] = useState<EditData>({ font_color: '', background_color: '', set_name: '' });
  const barRef = useRef(null);
  const percentageTagRef = useRef(null);
  const differenceTagRef = useRef(null);
  const [difference, setDifference] = useState(0);
  const [user, SetUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    group_name: "",
    position_title: "",
    id:""
  });
  

  const handleLike = (e:any, like:any, id:any) => {
    e.preventDefault();
    const data = { isLiked: like, reviewId: id, userId: user.id };
    LikeReview(data).then((res) => {
      getUserProfileDatabyid(id)
        .then((res) => {
          if (res.status === true) {
            SetUserData(res.data);
            setreviews(res.reviews);
            console.log(res.reviews);
          } else {
            toast.error(res.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
    });
  }
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (token && id) {
      // getlikedislike(id).then(data => {
      //     barRef.current.style.width = data.per + '%';
      //     percentageTagRef.current.innerHTML = data.difference;

      // });
      setIsAuthenticated(true);
      const firstName = localStorage.getItem('first_name');
      const lastName = localStorage.getItem('last_name');
      if (firstName !== null && lastName !== null) {
      setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
      }
    }
    const current_user_data = getCurrentUserData();
    if ('id' in current_user_data && current_user_data.id !== null) {
      getUserProfileDatabyid(current_user_data.id)
        .then((res) => {
          // console.log(res.data);

          if (res.status === true) {
            SetUserData(res.data);
            setreviews(res.reviews);
            console.log(res.reviews);
            // if (barRef.current !== null) {
            //   barRef.current.style.width = (res.data.bunjee_score || 0) + '%';
            //   percentageTagRef.current.innerHTML = res.data.bunjee_score || 0;
            // }            

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
  const style = {
    color: additionalData?.font_color ?? '',
    background: additionalData?.background_color ?? ''
  };

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
            <Link href="/admin/edit-profile" className="edit-btn chng"><i className="fa-solid fa-user-pen" /> Edit profile</Link>
            <button className="edit-btn" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" /> Log out</button>
          </div>
        </div>
      </section>
      <section className="profile-part">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="user-pro account-big">
              <a href="#" style={style} className="btn btn-all header-btn add-image-btn">
                    {additionalData?.set_name ?? initialName}
                  </a>
                {/* <img src="/assets/images/user.png" alt="user" className="user" /> */}
                <h2>{user.first_name + ' ' + user.last_name} </h2>
                <h3>{user.group_name}</h3>
                <h3>{user.company_name}</h3>
                <h3>{user.position_title}</h3>
              </div>
            </div>
           
          </div>
        </div>
      </section>
     
    </>
  )
}