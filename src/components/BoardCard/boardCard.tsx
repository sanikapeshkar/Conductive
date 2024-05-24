import styles from "./boardCard.module.scss";

function BoardCard() {
  return (
    <div className={styles.BoardCard}>
      <h3>Board Name</h3> 
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
      <button>Edit</button>
      <button>Delete</button>
      </div>

    </div>
  );
}

export default BoardCard;
