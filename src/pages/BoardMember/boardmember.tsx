import { useState } from "react";
import styles from "./boardmember.module.scss";
import Boards from "../../components/Board/BoardList/boards";
import Tickets from "../../components/TicketsList/tickets";
import WorkersList from "../../components/Employee/WorkersList/workers";
import { Sidebar } from "../../components/ui/Sidebar/sidebar";
import Customers from "../../components/customer/CustomersList/customers";
import TopBar from "../../components/ui/TopBar/TopBar";

export default function BoardMember({}: BoardMemberProps) {
  const [tab, settab] = useState("board");
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.BoardMemberMain}>
      <Sidebar handleTab={handletab} role="boardmember" />
      <div className={styles.Main}>
      <TopBar options={["reliance", "MSME", "board3"]}/>
        <div className={styles.Tabs}>
          {tab === "board" && <Boards />}
          {tab === "customer" && <Customers />}
          {tab === "workerdata" && <WorkersList />}
          {tab === "tickets" && <Tickets />}
        </div>
      </div>
    </div>
  );
}
