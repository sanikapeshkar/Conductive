import { useForm } from "react-hook-form"



export default function RaiseTicket(){


const {register,handleSubmit}=useForm();
function sendfile(){
    
}

    return <form onSubmit={handleSubmit(sendfile)}>
        <input type='file' {...register('file')} />
        <button type='submit'></button>
    </form>
}