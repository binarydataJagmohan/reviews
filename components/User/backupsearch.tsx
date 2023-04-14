import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {removeToken,removeStorageData,getCurrentUserData,} from "../../lib/session";
import {getSearchedResults,getLatestReviews,mostLikedReviews,LikeReview,} from "../../lib/backendapi";
import { useRouter } from "next/router";
import { format, parseISO, isValid } from "date-fns";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  console.log("q", q);

  const [user_id, setCurrentUserID] = useState("");

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [results, setResults] = useState([]);
  const [likeds, setLiked] = useState([]);

  const handleLike = (e, like, id) => {
    e.preventDefault();
    const userId = localStorage.getItem('id');
    const data = { isLiked: like, reviewId: id, userId: userId };
    LikeReview(data).then((res) => {
      console.log(res)
      Promise.all([getLatestReviews(), mostLikedReviews()])
        .then((responses) => {
          console.log("getLatestReviews response", responses[0]);
          console.log("mostLikedReviews response", responses[1]);
          setResults(responses[0].data);
          setLiked(responses[1].data);
        })
        .catch((error) => {
          setResults([]);
          setLiked([]);
        });
    });
  };

  useEffect(() => {
    if (!q) return;
    setSearch(q);
    getSearchedResults(q)
      .then((res) => {
        setSearchResults(res.results);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setSearchResults([]);
      });
  }, [q]);

  useEffect(() => {
    Promise.all([mostLikedReviews(), getLatestReviews()])
      .then((responses) => {
        console.log("mostLikedReviews response", responses[0]);
        console.log("getLatestReviews response", responses[1]);
        setLiked(responses[0].data);
        setResults(responses[1].data);
      })
      .catch((error) => {
        setLiked([]);
        setResults([]);
      });
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const current_user_data = getCurrentUserData();

    if (current_user_data.id != null) {
      current_user_data.id
        ? setCurrentUserID(current_user_data.id)
        : setCurrentUserID("");
    } else {
      window.location.href = "/Login";
    }
  };

  const handleSearch = async (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value) {
      getSearchedResults(value)
        .then((res) => {
          setSearchResults(res.results);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search`, {
      query: {
        q: search,
      },
    });
  };

  return (
    <>
      <section className="search-part section-sp">
        <div className="container">
          <div className="banner-search-box">
            <p>Search by name, company or group</p>
            <div className="group-search">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                  value={search}
                  list="searchResults"
                />
                <span className="input-group-text" id="basic-addon2">
                  <span type="submit" onClick={handleSubmit}>
                    <i className="fa-solid fa-magnifying-glass" />
                  </span>
                </span>
              </div>
              <datalist>
                {searchResults.map((searchResult: any, index) => (
                  <option
                    key={index}
                    value={`${searchResult?.first_name} ${searchResult?.last_name} | ${searchResult?.group_name} | ${searchResult?.company_name}`}
                  />
                ))}
              </datalist>
            </div>
          </div>

          {q && (
            <div className="subinput">
              {searchResults.map((searchResult: any, index) => (
                <div className={`bg-light p-3 border border-secondary`}>
                  <p
                    onClick={() =>
                      router.push(`/user/ViewProfile?userId=${searchResult.id}`)
                    }
                    className="cursor-pointer text-dark m-0"
                  >
                    {searchResult?.first_name} {searchResult?.last_name} |{" "}
                    {searchResult?.group_name} | {searchResult?.company_name}{" "}
                    <span style={{ float: "right" }}>
                      <i className="fa-solid fa-magnifying-glass" />
                    </span>
                  </p>
                </div>
              ))}
              <div className={`bg-primary p-3 border border-dark`}>
                <p
                  onClick={() => router.push(`/user/NewUserReview`)}
                  className="cursor-pointer m-0 text-center fw-bold"
                >
                  Don’t see who you’re looking for? Add a new review
                  <span style={{ float: "right" }}>
                    <i className="fa-solid fa-plus" />
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="my-reviews section-sp">
        <div className="container FrontendTest">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Most recent
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Most liked
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                By firm
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab2"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact2"
                type="button"
                role="tab"
                aria-controls="pills-contact2"
                aria-selected="false"
              >
                By Bungee score
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {Array.isArray(results) && results.length > 0 ? (
                results.map((result) => (
                  <div className="main_box mt-4">
                    <div className="row">
                      <div className="col-sm-8 col-7">
                        <h4>
                          {result?.first_name} {result?.last_name}
                        </h4>
                        <h4>
                          {result.group_name} | {result.company_name} |{" "}
                          {result.position_title}
                        </h4>
                      </div>
                      <div className="col-sm-4  col-5 text-right ">
                        <h6 className="date-time">
                          {isValid(parseISO(result.created_at))
                            ? format(
                                parseISO(result.created_at),
                                "M/d/yy HH:mm "
                              ) + "ET"
                            : "Invalid date"}
                          <span> #{result.id}</span>{" "}
                        </h6>
                        <p>
                          <a href="#" className="what">
                            What’s this?
                          </a>
                        </p>
                      </div>
                    </div>
                    <p>{result.description}</p>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-lg-2 col-md-3 col-5 ">
                            <h4 className="overall-rating">Overall rating:</h4>
                          </div>
                          <div className="col-lg-3 col-md-4 col-6 ">
                            <p className="rating">
                              <span>{result.avg_rating}</span>/5
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-lg-8 col-md-6 col-2" />
                          {/* <div className="col-lg-2 col-md-3 col-5">
              <p className="thum thum-up"><i className="fa-solid fa-thumbs-up" /> 14</p>
            </div>
            <div className="col-lg-2 col-md-3 col-5">
              <p className="thum thum-down"> <i className="fa-solid fa-thumbs-down" /> 2</p>
            </div> */}
                          <div className="col-lg-2 col-md-3 col-5">
                            <p
                              className="thum thum-up"
                              onClick={(e) =>
                                handleLike(e, 1, result.review_id)
                              }
                            >
                              <i className="fa-solid fa-thumbs-up" />
                              {result.thumbs_up}{" "}
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-3 col-5">
                            <p
                              className="thum thum-down"
                              onClick={(e) =>
                                handleLike(e, 0, result.review_id)
                              }
                            >
                              {" "}
                              <i className="fa-solid fa-thumbs-down" />{" "}
                              {result.thumbs_down}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Latest Review found</h1>
              )}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {Array.isArray(likeds) && likeds.length > 0 ? (
                likeds.map((liked) => (
                  <div className="main_box mt-4">
                    <div className="row">
                      <div className="col-sm-8 col-7">
                        <h4>
                          {liked?.first_name} {liked?.last_name}
                        </h4>
                        <h4>
                          {liked.group_name} | {liked.company_name} |{" "}
                          {liked.position_title}
                        </h4>
                      </div>
                      <div className="col-sm-4  col-5 text-right ">
                        <h6 className="date-time">
                          {liked.created_at}
                          <span> #{liked.id}</span>{" "}
                        </h6>
                        <p>
                          <a href="#" className="what">
                            What’s this?
                          </a>
                        </p>
                      </div>
                    </div>
                    <p>{liked.description}</p>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-lg-2 col-md-3 col-5 ">
                            <h4 className="overall-rating">Overall rating:</h4>
                          </div>
                          <div className="col-lg-3 col-md-4 col-6 ">
                            <p className="rating">
                              <span>{liked.avg_rating}</span>/5
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-lg-8 col-md-6 col-2" />
                          <div className="col-lg-2 col-md-3 col-5">
                            <p className="thum thum-up" onClick={e => handleLike(e, 1, liked.review_id)}><i className="fa-solid fa-thumbs-up" />{liked.thumbs_up} </p>
                          </div>
                          <div className="col-lg-2 col-md-3 col-5">
                            <p className="thum thum-down" onClick={e => handleLike(e, 0, liked.review_id)}> <i className="fa-solid fa-thumbs-down" /> {liked.thumbs_down}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Latest Review found</h1>
              )}
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              3
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact2"
              role="tabpanel"
              aria-labelledby="pills-contact-tab2"
            >
              4
            </div>
          </div>
        </div>
      </section>
    </>
  );
}