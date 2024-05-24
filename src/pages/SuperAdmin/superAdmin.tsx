import { useState } from "react";
import BoardCard from "../../components/BoardCard/boardCard";
import Header from "../../components/Header/header";
import SearchBar from "../../components/SearchBar/searchbar";
import { Sidebar } from "../../components/Sidebar/sidebar";
import styles from "./superAdmin.module.scss";
import Boards from "../../components/Boards/boards";
import Customer from "../Customer/customer";

function SuperAdmin() {
  const [tab,settab]=useState('board');

  function handletab(tab:string){
  settab(tab)
  }
  return (
    <div className={styles.SuperAdminMain}>
      <Sidebar handleTab={handletab}/>
      <div className={styles.Main}>
        <div className={styles.TopBar}>
       
          <SearchBar />
          <a href="/create">
            <button >Create</button>
          </a>
        </div>
  {tab==='board'&&<Boards/>}
  {tab==='customer'&&<Customer/>}
  {tab==='employee'&&<Customer/>}
  {tab==='tickets'&&<Customer/>}
      </div>
    </div>
  );
}

export default SuperAdmin;
