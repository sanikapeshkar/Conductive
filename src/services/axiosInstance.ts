import axios from "axios";

const authAxios=axios.create({
  baseURL:'https://f255-150-129-168-15.ngrok-free.app/',
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
    
  },

})

authAxios.interceptors.request.use((request) => {

  console.log(request)
  request.headers=request.headers;
  request.headers['authorization']=`Bearer ${localStorage.getItem("token")}`;

  return request;
})

export default authAxios

