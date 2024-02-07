import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import DisplayUser from "./components/DisplayUser";
import LoginPage from "./components/LoginPage";
 
function App() {
  return (
    <>
      <div className="App">
        <h3>Travel Desk App</h3>
      </div>
 
<BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<LoginPage/>}></Route> */}
    <Route path="/" element={<AdminDashboard/>} />
    <Route path="/user/create" element={<AddUser/>} />
    <Route path="/user/edit/:id" element={<EditUser/>} />
    <Route path="/user/display/:id" element={<DisplayUser/>} />
  </Routes>
</BrowserRouter>
    </>
  );
}
 
 
export default App;