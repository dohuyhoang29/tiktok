import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/Users/List";
import SideBar from './components/Commons/Sidebar'
import Add from "./components/Users/Add";
import Edit from "./components/Users/Edit";

function App() {

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/list" element={<UserList />} />
          <Route path="/user/add" element={<Add />} />
          <Route path="/user/edit" element={<Edit />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;