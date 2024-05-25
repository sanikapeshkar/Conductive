import { useState } from "react";
import styles from "./boardCard.module.scss";
import { BoardCardProps } from "./boardcard.types";
import Confirmation from "../../ui/Confirmation/confirmation";
import Popup from "../../ui/Popup/popup";
import EditBoard from "./EditBoard";

function BoardCard({ name }: BoardCardProps) {
  const [open,setopen]=useState(false);
  const [editopen,seteditopen]=useState(false);
  return (
    <div className={styles.BoardCard}>
      <h3>Board Name :{name}</h3>
      <table className={styles.RateTable}>
        <tbody>
          <tr>
            <th>Type</th>
            <th>Home</th>
            <th>Industrial</th>
          </tr>
          <tr>
            <td>Regular</td>
            <td>10</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Solar</td>
            <td>10</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.BtnContainer}>
        <button onClick={()=>seteditopen(true)}>Edit</button>
        <button>Delete</button>
      </div>
{editopen && <Popup isOpen={editopen} onClose={()=>seteditopen(false)}><EditBoard name={name} onClose={()=>seteditopen(false)}/></Popup>}
      {open && <Popup isOpen={open} onClose={()=>setopen(false)}>
              <Confirmation/>
              </Popup>}
    </div>
  );
}

export default BoardCard;
