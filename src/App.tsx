import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import SuperAdmin from "./pages/SuperAdmin/superAdmin";
import Header from "./components/Header/header";
import Supervisor from "./pages/Supervisor/supervisor";
import BoardAdmin from "./pages/BoardAdmin/boardadmin";
import BoardMember from "./pages/BoardMember/boardmember";
import Customer from "./pages/Customer/customer";
import CreateBoard from "./components/create/createBoard";
import { useState } from "react";
import FieldWorker from "./pages/FieldWorker/fieldworker";

const App = () => {
  const [role,setRole]=useState("")
  function handlerole(role:string){
setRole(role);
  }
  return (
    <>
    
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login handlerole={handlerole}/>} />
          <Route path="/superadmin" element={<SuperAdmin role={role}/>} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/fieldworker" element={<FieldWorker/>} />
          <Route path="/boardAdmin" element={<BoardAdmin />} />
          <Route path="/boardmember" element={<BoardMember />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/create" element={<CreateBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
