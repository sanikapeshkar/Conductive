import { useState } from "react";
import styles from "./superAdmin.module.scss";
import { Sidebar } from "../../components/ui/Sidebar/sidebar";
import Boards from "../../components/Board/BoardList/boards";
import Customers from "../../components/customer/CustomersList/customers";
import Employee from "../../components/Employee/EmployeeList/employee";
import Tickets from "../../components/TicketsList/tickets";
import TopBar from "../../components/ui/TopBar/TopBar";

function SuperAdmin({}: SuperAdminProps) {
  const [tab, settab] = useState("board");
 
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.SuperAdminMain}>
      <Sidebar handleTab={handletab} role="superadmin" />
      <div className={styles.Main}>
       <TopBar options={["reliance", "MSME", "board3"]}/>
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
