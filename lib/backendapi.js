import { getToken } from "./session";
import axios from "axios";

export const getUserProfileDatabyid = async (id) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/get-user-profile-data-id/'+id, {
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
export const getUserProfileData = async (slug) => {
  return new Promise((resolve, reject) => {
    const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/get-user-profile-data/'+slug, {
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
      });
      req.then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };


  // export const getSearchedResults = async (query) => {
  //   return new Promise((resolve, reject) => {
  //     const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/search/?q=' + query, {
  //       method: 'get',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Authorization': 'Bearer ' + getToken()
  //       },
  
  //     });
  //     req.then(res => resolve(res.data))
  //       .catch(err => reject(err));
  //   });
  // };
  export const getSearchedResults = async (query, slug) => {
    return new Promise((resolve, reject) => {
      const url = slug ? process.env.NEXT_PUBLIC_API_URL + `/search/${slug}` : process.env.NEXT_PUBLIC_API_URL + '/search/?q=' + query;
      const req = axios.request(url, {
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
  export const getownreviews = async (id) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/my_reviews/'+id, {
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


  export const LikeReview = async (data) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/like-review', {
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

  export const newuserreview = async (data) => {
    return new Promise((resolve, reject) => {
      const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/new_user_review', {
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
  export const deleteReviews = async (data) => {
    return new Promise((resolve, reject) => {
  const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/delete-reviews', {
    method: 'post',
    data:{id:data},
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+getToken()
    },
  });
  req.then(res => resolve(res.data))
    .catch(err => reject(err));
});
};

export const mostLikedReviews = async () => {
  return new Promise((resolve, reject) => {
    const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/most-liked-review', {
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

export const getallUsers = async () => {
  return new Promise((resolve, reject) => {
    const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/get-all-users', {
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

export const EditProfileData = async (data) => {
  return new Promise((resolve, reject) => {
    const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/edit-profile', {
      method: 'post',
      data:data,
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+getToken()
      },
    });
    req.then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const getEditdata = async (id) => {
  return new Promise((resolve, reject) => {
    const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/get-edit-profile-data/'+id, {
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

// export const getlikedislike = async (userId) => {
//   return new Promise((resolve, reject) => {
//     const req = axios.request(process.env.NEXT_PUBLIC_API_URL+'/getlikedislikes/'+userId, {
//       method: 'get',
//       headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Bearer '+getToken()
//       },
//     });
//     req.then(res => resolve(res.data))
//       .catch(err => reject(err));
//   });
// };

export const getbunjeeScore = async () => {
  return new Promise((resolve, reject) => {
    const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/get-bunjee-score', {
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
