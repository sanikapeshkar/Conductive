import { useState } from "react";
import styles from "./supervisor.module.scss";
import { SupervisorProps } from "./supervisor.types";

import CreateBoard from "../../components/create/createBoard";
import { Sidebar } from "../../components/ui/Sidebar/sidebar";
import SearchBar from "../../components/ui/SearchBar/searchbar";
import Popup from "../../components/ui/Popup/popup";
import Boards from "../../components/Board/BoardList/boards";
import Customers from "../../components/customer/CustomersList/customers";
import WorkersList from "../../components/Employee/WorkersList/workers";
import Tickets from "../../components/TicketsList/tickets";

export default function Supervisor({}: SupervisorProps) {
  const [tab, settab] = useState("board");
  const [open, setopen] = useState(false);
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.BoardAdminMain}>
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
          {tab === "boards" && <Boards />}
          {tab === "customers" && <Customers />}
          {tab === "workerdata" && <WorkersList />}
          {tab === "tickets" && <Tickets />}
        </div>
      </div>
    </div>
  );
}
