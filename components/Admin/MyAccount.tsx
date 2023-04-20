import React from 'react'
import { removeToken, removeStorageData, } from "../../lib/session";

export default function MyAccount (){

    function handleLogout(e:any) {
        e.preventDefault();
        removeToken();
        removeStorageData();
        window.location.href = '/Login';
      }
    

  return (
    <>
    <div>MyAccount</div>

            <button className="edit-btn" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" /> Log out</button>

            </>
  )
}


