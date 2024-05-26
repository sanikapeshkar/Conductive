import { useState } from "react";
import Customers from "../../components/customer/CustomersList/customers";
import { Sidebar } from "../../components/ui/Sidebar/sidebar";
import styles from "./customer.module.scss";
import TopBar from "../../components/ui/TopBar/TopBar";
import Tickets from "../../components/TicketsList/tickets";
import Customerdashboard from "../../components/customer/customerDashboard/customerdashboard";
import TicketsList from "../../components/TicketsList/tickets";

export default function CustomerPage() {
  const [tab, settab] = useState("customer");
  function handletab(tab: string) {
    settab(tab);
  }
  return (
    <div className={styles.Customer}>
      <Sidebar handleTab={handletab} role="customer" />
      <div className={styles.Main}>
        <TopBar options={["reliance", "MSME", "board3"]} />
        <div className={styles.Tabs}>
          {tab === "customer" && <Customerdashboard />}

          {tab === "tickets" && <TicketsList />}
        </div>
      </div>
    </div>
  );
}
