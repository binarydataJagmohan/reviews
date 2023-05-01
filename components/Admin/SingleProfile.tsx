import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserProfileDatabyid, LikeReview } from "../../lib/backendapi";
import { removeToken, removeStorageData, getCurrentUserData, } from "../../lib/session";
import { parseISO, format } from 'date-fns';
import { useRouter } from "next/router";
import { AxiosResponse } from 'axios';

type Review = {
    id: number;
    first_name: string;
    reviewed_user: {
      first_name: string;
    };
    description: string;
    total_rating: number; // Add this property
    avg_rating: number; 
    thumbs_up: number; 
    thumbs_down: number; 
  };
  
export default function SingleProfile() {

    const router = useRouter();
    const { userId } = router.query;
    const [initialName, setInitialName] = useState('');
    // const [reviews, setReviews] = useState([]);
    const [reviews, setReviews] = useState<Review[]>([]);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, SetUserData] = useState({
        first_name: "",
        last_name: "",
        company_name: "",
        group_name: "",
        position_title: "",
        id:"",
    });

    const handleLike = (e:any, like:any, id:any) => {
        e.preventDefault();
        const data = { isLiked: like, reviewId: id, userId: user.id };
        // return false;
        LikeReview(data).then((res) => {
            // this.review.thumbs_up(res.data.thumbs_up)
            console.log(res)
            setReviews(res.data);
        });
    }


    useEffect(() => {
        if (!userId) return;
        getUserProfileDatabyid(userId)
            .then((res) => {
                if (res.status === true) {
                    const firstName = res.data.first_name;
                    const lastName = res.data.last_name;
                    SetUserData(res.data);
                    setInitialName(`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);

                    // retrieve reviews data
                    const reviewsData = res.reviews;
                    //const reviewPromises = [];
                    const reviewPromises: Promise<string>[] = [];


                    // create an array of promises to fetch user information for review_to field
                    reviewsData.forEach((review:any) => {
                        const promise = getUserProfileDatabyid(review.review_to);
                        reviewPromises.push(promise);
                    });

                    // resolve all promises and set state with updated reviews data
                    // Promise.all(reviewPromises).then((reviewResponses) => {
                    //     const updatedReviews = reviewsData.map((review:any, index:any) => {
                    //         const reviewedUser = reviewResponses[index].data;
                    //         return { ...review, reviewed_user: reviewedUser };
                    //     });
                    //     setReviews(updatedReviews);
                    // });
                    Promise.all(reviewPromises).then((reviewResponses: any[]) => {
                        const updatedReviews = reviewsData.map((review: any, index: any) => {
                          if (typeof reviewResponses[index] === 'object') {
                            const reviewedUser = reviewResponses[index].data;
                            return { ...review, reviewed_user: reviewedUser };
                          } else {
                            // Handle the case where reviewResponses[index] is not an object
                            return review;
                          }
                        });
                        setReviews(updatedReviews);
                      });
                    
                }
            });
    }, [userId]);


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
                        {/* <button className="edit-btn" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" /> Log out</button> */}
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
            <div className="container pt-4">
                <div className="content-page">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                        {reviews.length > 0 ? (
                                            <div>
                                                <h4 className="mt-0 header-title pb-3">User Data</h4>
                                                <table id="datatable" className="table table-bordered dt-responsive nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>Review By</th>
                                                            <th>Review To</th>
                                                            <th>Description</th>
                                                            <th>Total Rating</th>
                                                            <th>Average Rating</th>
                                                            <th>Thumbs Up</th>
                                                            <th>Thumbs Down</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {reviews.map((review) => (
                                                            <tr key={review.id}>
                                                                <td>{review.first_name}</td>
                                                                <td>{review.reviewed_user.first_name}</td>
                                                                <td>{review.description}</td>
                                                                <td>{review.total_rating}</td>
                                                                <td>{review.avg_rating}</td>
                                                                <td>{review.thumbs_up}</td>
                                                                <td>{review.thumbs_down}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (
                                            <p>There are no reviews yet.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}