import { useState } from 'react'

import styles from './boardadmin.module.scss'
import { Sidebar } from '../../components/ui/Sidebar/sidebar';
import Boards from '../../components/Board/BoardList/boards';
import Customers from '../../components/customer/CustomersList/customers';
import WorkersList from '../../components/Employee/WorkersList/workers';
import Tickets from '../../components/TicketsList/tickets';
import TopBar from '../../components/ui/TopBar/TopBar';

export default function BoardAdmin(){
    const [tab, settab] = useState("board");
    function handletab(tab: string) {
      settab(tab);
    }
    return(<div className={styles.BoardAdminMain}>
        <Sidebar handleTab={handletab} role="boardadmin" />
      <div className={styles.Main}>
      <TopBar options={["reliance", "MSME", "board3"]}/>
        <div className={styles.Tabs}>
          {tab === "board" && <Boards />}
          {tab === "customer" && <Customers />}
          {tab === "workerdata" && <WorkersList />}
          {tab === "tickets" && <Tickets/>}
        </div>
        </div>
    </div>)
}