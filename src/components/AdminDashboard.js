import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";
 
 
const AdminDashboard = () => {
    const navigate = useNavigate();
    const LoadDetail=(id) => {
    navigate("/user/display/"+id);
    }
    const LoadEdit=(id) => {
        navigate("/user/edit/"+id);
    }
    const Remove=(id) => {
        if(window.confirm("Do you really want to remove ?")){
            fetch("https://localhost:44310/api/User/DeleteUser/" +id, {
                method: "DELETE"
               }).then((res) => {
                alert("Removed Successfully");
                window.location.reload();
         }).catch((err) => {
            console.log(err.message);
         })
        }
    }
     
    const [userData, setUserData] = useState(null);
 
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://localhost:44310/api/User/AllUsersToDisplay');
        const data = await response.json();
        setUserData(data);
      }
       fetchData();
    }, []);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2 className="text-center">Employees</h2>
          </div>
          <div className="card-body">
            <div>
            <Link to='/user/create'className="btn btn-success"> ADD New (+)</Link>
            </div>
            <table className="table table-bordered table-striped">
              <thead className="bg-dark text-white">
                <tr>
                  <td>UserId</td>
                  <td>FirstName</td>
                  <td>LastName</td>
                  <td>RoleName</td>
                  <td>ManagerName</td>
                  <td>DepartmentName</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                   {
                    userData && userData.map(user => (
                      <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.roleName}</td>
                        <td>{user.managerName}</td>
                        <td>{user.departmentName}</td>
                        <td> <a onClick={()=>{LoadEdit(user.userId)}}  className="btn btn-success">Edit</a>
                        <a onClick={()=>{LoadDetail(user.userId)}} className="btn btn-primary">Details</a>
                        <a  onClick={()=>{Remove(user.userId)}} className="btn btn-danger">Delete</a>
                        </td>
                         
       
                      </tr>
                    ))
                   }
 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default AdminDashboard;