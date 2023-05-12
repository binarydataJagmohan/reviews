import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserMerge, getallUsers } from "../../lib/backendapi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



interface Review {
  first_name: string;
  company_name: string;
  group_name: string;
  position_title: string;
  id: number;
}
export default function Usermerge() {

  const [users, setUsers] = useState<Review[]>([]);
  const [deleteId, setDeleteId] = useState("");
  const [mergeId, setMergeId] = useState("");

  useEffect(() => {
    getallUsers().then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);


  const handleMergeSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      deleteId: deleteId,
      mergeId: mergeId
    }
    UserMerge(data).then(res => {
      console.log(res.data);
      toast.success('Data merged successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 3000); // reload after 2 seconds
    })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className="mainclass">
      {/* <h1>User Merge</h1> */}
      <form className="set-merge-form" onSubmit={handleMergeSubmit}>
        <label>
          Select User:
          <select
          
            name="delete_id"
            onChange={(e) => setDeleteId(e.target.value)}>
            <option value="">Select user to delete</option>
            {users.map((user) => (
              <option key={user.id} value={user.id} className="set-wid">
                {user.first_name}
               {user.company_name && ` | ${user.company_name}`}
                {user.group_name && ` | ${user.group_name}`}
                {user.position_title && ` | ${user.position_title}`}
              </option>
            ))}
          </select>
        </label>
        <div className="image-ico">
          <img src={process.env.NEXT_PUBLIC_BASE_URL + "assets/images/58f8bcf70ed2bdaf7c128307.png"} alt="" />

        </div>
        <br />
        <label>
          Select User:
          <select name="user_merge_id" onChange={(e) => setMergeId(e.target.value)}>
            <option value="">Select user to merge with</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.first_name}
                {user.company_name && ` | ${user.company_name}`}
                {user.group_name && ` | ${user.group_name}`}
                {user.position_title && ` | ${user.position_title}`}
              </option>
            ))}
          </select>
        </label>
        <br />
        {/* <button type="button" className="btn bn-style-popop" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Merge Users
        </button> */}
        <button
          type="button"
          className="btn bn-style-popop"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          disabled={!deleteId || !mergeId}
        >
          Merge Users
        </button>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* <p>Do you want to merge these users?</p> */}
                <p>Before merging these users, please confirm your decision. This action will permanently merge the selected users and their data. Are you sure you want to proceed with the merge?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Merge</button>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </form>
      <ToastContainer />

    </div>
  );

}