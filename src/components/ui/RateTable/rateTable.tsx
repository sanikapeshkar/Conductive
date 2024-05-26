import styles from "./ratetable.module.scss";
interface RateTableProps {
  rateh1: number;
  rateh2: number;
  rates1: number;
  rates2: number;
}

export default function RateTable({
  rateh1,
  rateh2,
  rates1,
  rates2,
}: RateTableProps) {
  return (
    <table className={styles.RateTable}>
      <tbody>
        <tr>
          <th>Type</th>
          <th>Home</th>
          <th>Industrial</th>
        </tr>
        <tr>
          <td>Regular</td>
          <td>10{rateh1}</td>
          <td>12{rates1}</td>
        </tr>
        <tr>
          <td>Solar</td>
          <td>10{rateh2}</td>
          <td>12 {rates2}</td>
        </tr>
      </tbody>
    </table>
  );
}
