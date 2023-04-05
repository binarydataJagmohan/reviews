import axios from 'axios'

export default function AuthUser()
{
    const http = axios.create({
        baseURL: "http://localhost:8000/api",
        headers:{
            "content-type" : 'application/json'
        }
    });
     return {
        http
     }
}