import React, { useState, useEffect } from "react";
import axios from "axios";
import { getallUsers } from "../../lib/backendapi";
import { useRouter } from "next/router";

export default function AddReview() {
     
    const router = useRouter()
    const [allusers, setAllUsers] = useState([]);

    useEffect(() => {
        getallUsers()
            .then((res) => {
                if (res.status) {
                    setAllUsers(res.data);
                    console.log(res.data);
                }
            })
    }, [])

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
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap">
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
                                                    <tr>
                                                        <td> {data.first_name} {data.last_name}</td>
                                                        <td> {data.email}</td>
                                                        <td> {data.company_name ? data.company_name : "No record"}</td>
                                                        <td> {data.group_name ? data.group_name : "No record"}</td>
                                                        <td> {data.position_title ? data.position_title : "No record"}</td>
                                                        <p onClick={() => router.push(`/admin/single-profile?userId=${data.id}`)}><td className="text-center">
                                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                                        </td>
                                                        </p>
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
    )
}
