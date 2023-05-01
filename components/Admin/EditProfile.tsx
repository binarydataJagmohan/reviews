import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { saveAdminProfileData, getUserProfileData, LikeReview, deleteReviews, EditProfileData, getEditdata, getUserProfileDatabyid } from "../../lib/backendapi";


interface EditData {
  font_color: string;
  background_color: string;
  set_name?: string | null;
}
export default function EditProfile() {
  const current_user_data = getCurrentUserData();
  const [initialName, setInitialName] = useState('');
  const [reviews, setreviews] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [additionalData, setadditionalData] = useState([]);
  const [additionalData, setadditionalData] = useState<EditData>({ font_color: '', background_color: '', set_name: '' });
  const [editData, seteditData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [shownPassword, setShownPassword] = useState(false);
  const [styled, setstyled] = useState({
    'color': '',
    'background': ''
  })

  const [user, SetUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    view_password: "",
    company_name: "",
    group_name: "",
    position_title: "",
    set_name: "",
    font_color: "",
    background_color: "",
    id: ""
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (token && id) {
      setIsAuthenticated(true);
      const firstName = localStorage.getItem('first_name');
      const lastName = localStorage.getItem('last_name');
      if (firstName !== null && lastName !== null) {
        setInitialName(`${firstName.substring(0, 1).toUpperCase()}${lastName.substring(0, 1).toUpperCase()}`);
      }
    }
    const current_user_data = getCurrentUserData();
    if ('id' in current_user_data && current_user_data.id !== null) {
      getUserProfileDatabyid(current_user_data.id)
        .then((res) => {
          if (res.status === true) {
            SetUserData(res.data);
            setreviews(res.reviews);
            // console.log(res.reviews);
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
      //console.log(res);
    });
  }, []);
  const style = {
    color: additionalData?.font_color ?? '',
    background: additionalData?.background_color ?? ''
  };




  const handleChange = (event: any) => {
    const { name, value } = event.target;
    SetUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: any) => {
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
      // console.log(res);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location.href = "/admin/edit-profile";
    } catch (err) {
      toast.error("Error occurred", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const EditChange = (event: any) => {
    const { name, value } = event.target;
    SetUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleEdit = async (e: any) => {
    const current_user_data = getCurrentUserData();
    // console.log(current_user_data.id);
    if (!current_user_data) return;
    if (user.set_name && user.set_name.length > 2) {
      toast.error("Name should be only two letters.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000 // set duration to 5 seconds
      });
      return;
    }
    const body = {
      user_id: 'id' in current_user_data ? current_user_data.id : null,
      set_name: user.set_name,
      font_color: user.font_color,
      background_color: user.background_color
    };
    try {
      const res = await EditProfileData(body);
      // console.log(res);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      toast.error("Error occurred", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  const togglePasswordVisibility = (e: any) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const PasswordVisibility = (e: any) => {
    e.preventDefault();
    setShownPassword(!shownPassword);
  };


  return (
    <>
      <form action="" className="main-form" onSubmit={handleSubmit}>
        <section className="edit-part section-sp">
          <div className="container">
            <div className="button-part text-right">
              {/* <button className="edit-btn Cancel"> Cancel</button> */}
              <Link href="/admin/edit-profile"
                className="edit-btn st Cancel">Cancel
              </Link>
              <button className="edit-btn Save changes"> Save changes</button>
            </div>
          </div>
        </section>
        <section className="profile-part">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="user-pro">
                  <a href="#" style={style} className="btn btn-all header-btn add-image-btn">
                    {additionalData?.set_name ?? initialName}
                  </a>
                  <i data-bs-toggle="modal"
                    data-bs-target="#EditModal" style={{ 'cursor': 'pointer' }} className="fa-solid fa-user-pen setpen" />
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
                    <input type={showPassword ? "text" : "password"} value={user.view_password} readOnly />

                    <p className="show" onClick={togglePasswordVisibility}><a href="#">Show</a></p>


                  </div>
                  <div className="show-fild">
                    <label>Confirm New Password</label>
                    <input type={shownPassword ? "text" : "password"} value={user.view_password} readOnly />

                    <p className="show" onClick={PasswordVisibility}><a href="#">Show</a></p>

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

      {/* Modal */}

      <div
        className="modal fade"
        id="EditModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {" Update your Profile"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleEdit}>
                <div className="form-group">
                  <label>Edit Intial Letters</label>
                  <input type="text" name="set_name" onChange={EditChange} className="form-control" placeholder="" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mt-3">
                      <label>Font color</label>
                      <input type="color" name="font_color" onChange={EditChange} className="form-control set-size" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mt-3">
                      <label>Background color</label>
                      <input type="color" name="background_color" onChange={EditChange} className="form-control set-size" />
                    </div>
                  </div>
                </div>
                <div className="center mt-3 text-center">
                  <button type="submit" className="btn edit-btn Save changes">Update</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
