import { getToken } from "./session";
import axios from "axios";

export const getUserProfileData = async (id) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/get-user-profile-data/'+id, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+getToken()
        },
       
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };

  export const saveAdminProfileData = async (data) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/update-profile-data', {
        method: 'post',
        data:data,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+getToken()
        },
        // params: {
        //   ...data
        // }
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };

  export const searchuser = async (data) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/search?q=${searchQuery}', {
        method: 'get',
        // data:data,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+getToken()
        },
        // params: {
        //   ...data
        // }
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };

  export const getSearchedResults = async (query) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/search/?q=' + query, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + getToken()
        },
  
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };

  export const getLatestReviews = async () => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/getallreview', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + getToken()
        },
  
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  
  export const submitReview = async (data) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/savereview', {
        method: 'post',
        data: data,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + getToken()
        },
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };