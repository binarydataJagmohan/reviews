import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserProfileData, LikeReview } from "../../lib/backendapi";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { parseISO, format } from 'date-fns';
import { useRouter } from "next/router";

export default function SingleProfile() {

    const router = useRouter();
    const { userId } = router.query;
    const [initialName, setInitialName] = useState('');
    const [reviews, setReviews] = useState([]);
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
          setReviews(res.data);
        });
      }

    useEffect(() => {
        if (!userId) return;
        getUserProfileData(userId)
            .then((res) => {
                if (res.status === true) {
                    const firstName = res.data.first_name;
                    const lastName = res.data.last_name;
                    console.log(res.data);
                    SetUserData(res.data);
                    setReviews(res.reviews);
                    setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
                }
            })
    }, []);

    function handleLogout(e: any) {
        e.preventDefault();
        removeToken();
        removeStorageData();
    }

    return (
        <>
            <section className="edit-part section-sp">
                <div className="container">
                    <div className="button-part text-right">
                        <button className="edit-btn" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" /> Log out</button>
                    </div>
                </div>
            </section>
            <section className="profile-part">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="user-pro account-big">
                                <a href="#" className="btn btn-all header-btn add-image-btn">
                                    {initialName}
                                </a>
                                <h2>{user.first_name} {user.last_name}</h2>
                                <h3>{user.company_name}</h3>
                                <h3>{user.group_name}</h3>
                                <h3>{user.position_title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-reviews section-sp">
                <div className="container">
                    <h1>My reviews</h1>
                    {reviews.map((review) => (
                        <div className="main_box mt-4">
                            <div className="row">
                                <div className="col-sm-8 col-7">
                                    <h4>{review.first_name}</h4>
                                    <h4>{review.group_name} | {review.company_name}</h4>
                                    <h4>{review.position_title}</h4>
                                </div>
                                <div className="col-sm-4  col-5 text-right ">
                                    <h6 className="date-time">{format(parseISO(review.created_at), 'M/d/yy HH:mm ')}ET<span> #{review.id}</span> </h6>
                                    <p><a href="#" className="what">What’s this?</a></p>
                                </div>
                                <div className="col-sm-4 col-5 text-right ">
                                    <div className="del-icon">
                                    </div>
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
                                            <p className="thum thum-up" onClick={e => handleLike(e, 1, review.id)}>
                                                <i className="fa-solid fa-thumbs-up" /> {review.thumbs_up}
                                            </p>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-5">
                                            <p className="thum thum-down" onClick={e => handleLike(e, 0, review.id)}>
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