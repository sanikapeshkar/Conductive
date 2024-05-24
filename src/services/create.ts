import { PiPassword } from "react-icons/pi"
import authAxios from "./axiosInstance"


const createboard=async(email:string,password:string)=>{
    try{
    const response=await authAxios.post('/',

    {
        email,password
    }
    )
    }
    catch(e){

    }

}