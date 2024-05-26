import { useState } from "react";
import styles from "./confirmation.module.scss";

export default function Confirmation() {
 const [confirm,setconfirm]=useState(false);
  return (
    <>
  
  {  !confirm &&<div className={styles.Confirmation}>
      <h2>Are You Sure ?</h2>
      <div className={styles.BtnContainer}>
        <button onClick={()=>setconfirm(true)}>Yes</button> <button onClick={()=>setconfirm(false)}>No</button>
      </div>
    </div>}

  {  confirm && <div>Saved</div>}
    </>
  );
}
