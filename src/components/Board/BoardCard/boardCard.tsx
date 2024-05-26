import { useState } from "react";
import styles from "./boardCard.module.scss";
import { BoardCardProps } from "./boardcard.types";
import Confirmation from "../../ui/Confirmation/confirmation";
import Popup from "../../ui/Popup/popup";
import EditBoard from "./EditBoard";
import RateTable from "../../ui/RateTable/rateTable";

function BoardCard({ boardId,name ,rateh1,rateh2,rates1,rates2}: BoardCardProps) {
  const [open, setopen] = useState(false);
  const [editopen, seteditopen] = useState(false);
  return (
    <div className={styles.BoardCard}>
      <h3>Board Name :{name}</h3>
     <RateTable rateh1={rateh1} rateh2={rateh2} rates1={rates1} rates2={rates2} />
      <div className={styles.BtnContainer}>
        <button onClick={() => seteditopen(true)}>Edit</button>
        <button>Delete</button>
      </div>
      {editopen && (
        <Popup isOpen={editopen} onClose={() => seteditopen(false)}>
          <EditBoard
            boardId={boardId}
            name={name}
            onClose={() => {
              seteditopen(false);
              setopen(true);
            }}
          />
        </Popup>
      )}
      {open && (
        <Popup isOpen={open} onClose={() => setopen(false)}>
          <Confirmation />
        </Popup>
      )}
    </div>
  );
}

export default BoardCard;
