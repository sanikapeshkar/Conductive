import { useForm } from "react-hook-form";
import styles from "./create.module.scss";
import { checkLogincredentials } from "../../services/getLogin";

//creating a board one will provide  boardname and boardadminemail
export default function CreateBoard() {
  const { register, handleSubmit } = useForm();

  async function createboard(data: any) {
    console.log(data); //send this data
    // const roleId=await checkLogincredentials(data.email, data.password);
    // sendboard(data.email, data.password,roleId);
  }
  return (
    <div className={styles.create}>
      <h2>Create a Board</h2>
      <form className={styles.createForm} onSubmit={handleSubmit(createboard)}>
        <input placeholder="name" {...register("name")} />
        <input placeholder="email" {...register("email")} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
