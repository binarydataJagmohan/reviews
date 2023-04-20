import React, { useState, useEffect } from "react";
import axios from "axios";
import { getallUsers } from "../../lib/backendapi";
import { useRouter } from "next/router";

export default function AddReview() {
  const router = useRouter();
  const [allusers, setAllUsers] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    getallUsers().then((res) => {
      if (res.status) {
        setAllUsers(res.data);
        console.log(res.data);
      }
    });
  }, []);

  return (
    <>
      <div className="container pt-4">
        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card-box">
                    <h4 className="mt-0 header-title  pb-3">All User</h4>
                    <table
                      id="datatable"
                      className="table table-bordered dt-responsive nowrap"
                    >
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Email</th>
                          <th>Company Name</th>
                          <th>Group Name</th>
                          <th>Position Title</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allusers.map((data) => (
                          // eslint-disable-next-line react/jsx-key
                          <tr>
                            <td>
                              {" "}
                              {data.first_name} {data.last_name}
                            </td>
                            <td> {data.email}</td>
                            <td>
                              {" "}
                              {data.company_name
                                ? data.company_name
                                : "No record"}
                            </td>
                            <td>
                              {" "}
                              {data.group_name ? data.group_name : "No record"}
                            </td>
                            <td>
                              {" "}
                              {data.position_title
                                ? data.position_title
                                : "No record"}
                            </td>
                            <div className="row align-items-center">
                              <div className="col-sm-6">
                                <p
                                  onClick={() =>
                                    router.push(
                                      `/admin/single-profile?userId=${data.id}`
                                    )
                                  }
                                >
                                  <td className="text-center">
                                    <i
                                      className="fa fa-eye"
                                      aria-hidden="true"
                                    ></i>
                                  </td>
                                </p>
                              </div>
                              <div className="col-sm-6 col-5 text-right ">
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
                                        <h5
                                          className="modal-title"
                                          id="exampleModalLabel"
                                        >
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
                                        <h3>
                                          Are you sure you want to delete this
                                          review?
                                        </h3>
                                        <p>
                                          {" "}
                                          If deleted, this review will not be
                                          able to be recovered. Deleting reviews
                                          does not impact your bungee score.{" "}
                                        </p>
                                      </div>
                                      <div className="modal-footer j-cebter">
                                        <button
                                          type="button"
                                          className="btn edit-btn  Save changes"
                                          data-bs-dismiss="modal"
                                          onClick={(e) =>
                                            handleDelete(e, review.review_id)
                                          }
                                        >
                                          Yes
                                        </button>
                                        <button
                                          type="button"
                                          className="btn edit-btn  Cancel"
                                        >
                                          No
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
