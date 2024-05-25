import { useState } from "react";
import { Sidebar } from "../../components/Sidebar/sidebar";
import styles from "./supervisor.module.scss";
import Boards from "../../components/Board/BoardList/boards";
import Customers from "../../components/CustomersList/customers";

import Tickets from "../../components/TicketsList/tickets";
import WorkersList from "../../components/WorkersList/workers";
import { SupervisorProps } from "./supervisor.types";
import SearchBar from "../../components/SearchBar/searchbar";
import Popup from "../../components/Popup/popup";
import CreateBoard from "../../components/create/createBoard";

export default function Supervisor({}: SupervisorProps) {
  const [tab, settab] = useState("board");
  const [open, setopen] = useState(false);
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.SupervisorMain}>
      <Sidebar handleTab={handletab} role="supervisor" />
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
