import React, { useState, useEffect } from "react";
import axios from "axios";
import { samename, UserMerge} from "../../lib/backendapi";


export default function MergeUsersForm() {
  const [users, setUsers] = useState([]);
  const [userId1, setUserId1] = useState('');
  const [userId2, setUserId2] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {

    samename()
    UserMerge()

  })
  
  const handleMerge = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/merge', {
        user_id_1: userId1,
        user_id_2: userId2
      });
      setMessage(response.data.message);
      // Update dropdown value after merge
      setUserId2(userId1);
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while merging users');
    }
  };

  return (
    <form onSubmit={handleMerge}>
      <label>
        User 1:
        <select value={userId1} onChange={(event) => setUserId1(event.target.value)}>
          <option value="">Select user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        User 2:
        <select value={userId2} onChange={(event) => setUserId2(event.target.value)}>
          <option value="">Select user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Merge Users</button>
      <br />
      <div>{message}</div>
    </form>
  );
}
