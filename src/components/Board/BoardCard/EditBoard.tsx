import { useForm } from "react-hook-form";
import styles from "./editboard.module.scss";
import { EditBoardProps } from "./boardcard.types";
import { editboard } from "../../../services/getdata";

function EditBoard({ boardId,name, onClose }:EditBoardProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: name,
    }
  });

  const onSubmit = (data:any) => {
    console.log(data);
  
    editboard(boardId,data);
    onClose();
  };

  return (
    <div className={styles.EditBoard}>
      <h2>Edit Board</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Board Name:
          <input {...register("name")} />
        </label>
       
        <button type="submit" >Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditBoard;
