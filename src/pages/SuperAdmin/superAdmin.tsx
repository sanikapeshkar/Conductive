import { useState } from "react";
import styles from "./superAdmin.module.scss";
import { Sidebar } from "../../components/ui/Sidebar/sidebar";
import SearchBar from "../../components/ui/SearchBar/searchbar";
import Popup from "../../components/ui/Popup/popup";
import CreateBoard from "../../components/create/createBoard";
import Boards from "../../components/Board/BoardList/boards";
import Customers from "../../components/customer/CustomersList/customers";
import Employee from "../../components/Employee/EmployeeList/employee";
import Tickets from "../../components/TicketsList/tickets";


function SuperAdmin({  }: SuperAdminProps) {
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
        {tab === "boards" && <Boards />}
        {tab === "customers" && <Customers />}
        {tab === "employees" && <Employee />}
        {tab === "tickets" && <Tickets />}
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
