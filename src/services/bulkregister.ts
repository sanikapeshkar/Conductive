import authAxios from "./axiosInstance"



export const senddata=()=>{
try{
    authAxios.post('url',{
        
    })
}
catch(e:any){
  console.log(e.message);

}}