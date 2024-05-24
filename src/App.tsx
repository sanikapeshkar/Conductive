import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import SuperAdmin from "./pages/SuperAdmin/superAdmin";
import Header from "./components/Header/header";
import Supervisor from "./pages/Supervisor/supervisor";
import BoardAdmin from "./pages/BoardAdmin/boardadmin";
import BoardMember from "./pages/BoardMember/boardmember";
import Customer from "./pages/Customer/customer";
import CreateBoard from "./components/create/createBoard";

const App = () => {
  return (
    <>
    
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/fieldworker" element={<Login />} />
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
