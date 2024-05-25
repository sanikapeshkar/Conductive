import { useEffect, useState } from "react";
import BoardCard from "../BoardCard/boardCard";
import styles from "./boards.module.scss";
import { getboards } from "../../../services/getdata";
import { z } from "zod";


const boardSchema = z.object({
  name: z.string(),
  email:z.string()
});

const boardsSchema = z.array(boardSchema);
export default function Boards() {
  const [allboards, setallboards] = useState<any[]>([]);
  const getboarddata = async () => {
    const allboard = await getboards();
    const parsedData = boardsSchema.parse(allboard);
    setallboards(parsedData);
  };

  useEffect(() => {
    getboarddata();
  }, [allboards]);
  return (
    <div className={styles.BoardList}>
      {allboards.map((a) => (
        <BoardCard name={a.name} />
      ))}
    </div>
  );
}
