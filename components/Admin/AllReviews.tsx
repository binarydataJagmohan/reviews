import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLatestReviews } from "../../lib/backendapi";
import { useRouter } from "next/router";
import Pagination from "../PaginationComponent/pagination";
import {paginate} from "../../helpers/paginate"

export default function AllReview() {
    const router = useRouter();
    const [allreviews, setAllReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;


    useEffect(() => {
        getLatestReviews().then((res) => {
            if (res.status) {
                setAllReviews(res.data);
                console.log(res.data);
            }
        });
    }, []);

    const onPageChange = (page) => {
        setCurrentPage(page);
      
    };

    const paginatedUsers = paginate(allreviews, currentPage, pageSize);

    return (
        <>
            <div className="container pt-4">
                <div className="content-page">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                        <h4 className="mt-0 header-title pb-3">All Reviews</h4>
                                        {paginatedUsers.length === 0 ? (
                                            <p>No reviews yet.</p>
                                        ) : (
                                            <><table
                                                    id="datatable"
                                                    className="table table-bordered dt-responsive nowrap"
                                                >
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
                                                        {paginatedUsers.map((review) => (
                                                            <tr key={review.id}>
                                                                <td>{review.review_by_name}</td>
                                                                <td>{review.review_to_name}</td>
                                                                <td>{review.description}</td>
                                                                <td>{review.total_rating}</td>
                                                                <td>{review.avg_rating}</td>
                                                                <td>{review.thumbs_up}</td>
                                                                <td>{review.thumbs_down}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table><Pagination
                                                        items={allreviews.length}
                                                        currentPage={currentPage}
                                                        pageSize={pageSize}
                                                        onPageChange={onPageChange} /></> 
                                        )}
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
