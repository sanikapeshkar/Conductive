import authAxios from "./axiosInstance"


export const getboards=async()=>{

    try{
    const response=await authAxios.get('/board/all');
    console.log(response.data.data);

    return response.data.data;}

    catch(e:any){
        console.log(e)
    }
}