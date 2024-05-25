import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import { checkPage, checkLogincredentials } from "../../services/getLogin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
}
export default function Login({}: LoginProps) {
  const [role, setRole] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onsubmit = async (data: any) => {
    console.log(data);

    const roleId = await checkLogincredentials(data.email, data.password);
    console.log(roleId);
    const role = await checkPage(roleId);
    console.log(role);
    setRole(role.toLowerCase());
  };
  useEffect(() => {
    if (role) {
      if (role) {
        navigate(`/${role}`);
      }
    }
  }, [navigate, role]);

  return (
    <div className={styles.LoginMain}>
      <form className={styles.LoginForm} onSubmit={handleSubmit(onsubmit)}>
        <h2 className={styles.heading}>Login </h2>
        <input {...register("email")} placeholder="email here"></input>
        <input {...register("password")} type="password" required></input>

        <button type="submit">Login</button>
  
      </form>
    </div>
  );
}
