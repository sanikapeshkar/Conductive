import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import FieldWorker from "./pages/FieldWorker/fieldworker";
import Header from "./components/ui/Header/header";
import Login from "./pages/Login/login";
import SuperAdmin from "./pages/SuperAdmin/superAdmin";
import Supervisor from "./pages/Supervisor/supervisor";
import Customer from "./pages/Customer/customer";
import BoardAdmin from "./pages/BoardAdmin/boardadmin";
import BoardMember from "./pages/BoardMember/boardmember";
import CreateBoard from "./components/create/createBoard";

const App = () => {

  return (
    <>
    
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/fieldworker" element={<FieldWorker/>} />
          <Route path="/boardAdmin" element={<BoardAdmin/>} />
          <Route path="/boardmember" element={<BoardMember/>} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/create" element={<CreateBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
