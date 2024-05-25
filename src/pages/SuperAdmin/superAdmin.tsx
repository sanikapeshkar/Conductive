import { useState } from "react";
import SearchBar from "../../components/SearchBar/searchbar";
import { Sidebar } from "../../components/Sidebar/sidebar";
import styles from "./superAdmin.module.scss";
import Boards from "../../components/Board/BoardList/boards";
import Customer from "../Customer/customer";
import Employee from "../../components/EmployeeList/employee";
import Tickets from "../../components/TicketsList/tickets";
import Popup from "../../components/Popup/popup";
import CreateBoard from "../../components/create/createBoard";
import Customers from "../../components/CustomersList/customers";

function SuperAdmin({ role }: SuperAdminProps) {
  const [tab, settab] = useState("board");
  const [open, setopen] = useState(false);
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.SuperAdminMain}>
      <Sidebar handleTab={handletab} role="superadmin" />
      <div className={styles.Main}>
        <div className={styles.TopBar}>
          <SearchBar />
         
            <button onClick={()=>setopen(true)}>Create</button>
            {open && <Popup isOpen={open} onClose={()=>setopen(false)}>
              <CreateBoard/>
              </Popup>}
      
        </div>
        <div className={styles.Tabs}>
        {tab === "board" && <Boards />}
        {tab === "customer" && <Customers />}
        {tab === "employee" && <Employee />}
        {tab === "tickets" && <Tickets />}
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
