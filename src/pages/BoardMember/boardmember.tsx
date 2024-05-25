import { useState } from "react";
import styles from "./boardmember.module.scss";
import Boards from "../../components/Board/BoardList/boards";


import Tickets from "../../components/TicketsList/tickets";

import CreateBoard from "../../components/create/createBoard";
import SearchBar from "../../components/ui/SearchBar/searchbar";
import Popup from "../../components/ui/Popup/popup";
import WorkersList from "../../components/Employee/WorkersList/workers";
import { Sidebar } from "../../components/ui/Sidebar/sidebar";
import Customers from "../../components/customer/CustomersList/customers";

export default function BoardMember({}: BoardMemberProps) {
  const [tab, settab] = useState("board");
  const [open, setopen] = useState(false);
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.BoardMemberMain}>
      <Sidebar handleTab={handletab} role="boardmember" />
      <div className={styles.Main}>
        <div className={styles.TopBar}>
          <SearchBar />

          <button onClick={() => setopen(true)}>Create</button>
          {open && (
            <Popup isOpen={open} onClose={() => setopen(false)}>
              <CreateBoard />
            </Popup>
          )}
        </div>
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
