import React, { useState, useEffect } from "react";
import axios from "axios";
import { getallUsers, deleteUser } from "../../lib/backendapi";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../PaginationComponent/pagination";
import {paginate} from "../../helpers/paginate"


export default function AddReview() {
  const router = useRouter();
  const [allusers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    getallUsers().then((res) => {
      if (res.status) {
        setAllUsers(res.data);
      // console.log(res.data);
        
      }
    });
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
  
};

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteUser(id)
      .then((res) => {
        toast.success('User has been deleted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // in milliseconds
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000); // wait for 3 seconds before reloading the page
      })
      .catch((error) => {
        toast.error('Error occurred while deleting user!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // in milliseconds
        });
      });
  };
  const paginatedUsers = paginate(allusers, currentPage, pageSize);

  

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
                          {/* <th>Email</th> */}
                          <th>Company Name</th>
                          <th>Group Name</th>
                          <th>Position Title</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedUsers.map((data, index) => (
                          // eslint-disable-next-line react/jsx-key
                          <tr key={index}>
                            <td>
                              {" "}
                              {data.first_name} {data.last_name}
                            </td>
                            {/* <td> {data.email}</td> */}
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
                                    <td className="text-center">
                                      <i
                                        className="fa fa-eye set-eye"
                                        aria-hidden="true"
                                        onClick={() =>
                                          router.push(
                                            `/admin/single-profile?userId=${data.id}`
                                          )
                                        }
                                      ></i>
                                    </td>
                                </div>
                                <div className="col-sm-6 col-5">
                                  <div className="del-icon delt">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#exampleModal${data.id}`}
                                    >
                                      <i className="fa-solid fa-trash del" />
                                    </a>
                                  </div>
                                  <div
                                    className="modal fade"
                                    id={`exampleModal${data.id}`}
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5 className="modal-title" id="exampleModalLabel"></h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body pop-des">
                                          <h3>Are you sure you want to delete this user?</h3>
                                          <p>
                                            If deleted, this user will not be able to be recovered.
                                          </p>
                                        </div>
                                        <div className="modal-footer j-cebter">
                                          <button
                                            type="button"
                                            className="btn edit-btn Save changes"
                                            data-bs-dismiss="modal"
                                            onClick={(e) => handleDelete(e, data.id)}
                                          >
                                            Yes
                                          </button>
                                          <button type="button" className="btn edit-btn Cancel">
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
                    <Pagination
                            items={allusers.length} 
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={onPageChange}
                            />  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
