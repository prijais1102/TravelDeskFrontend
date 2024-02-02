import React from 'react'
import 'bootstrap-table/dist/bootstrap-table.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import './AdminDashboard.css'; 
const Admin = () => {
   
    const [data, setData] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://localhost:44310/api/User/AllUsersToDisplay');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
 
   
  return (
   <>
  <div className="container">
  <table data-toggle="table" data-pagination="true" data-search="true">
  <thead>
    <tr>
      <th data-field="userid">UserId</th>
      <th data-field="firstname">FirstName</th>
      <th data-field="lastname" >LastName</th>
      <th data-field="rolename">Rolename</th>
      <th data-field="managername">ManagerName</th>
      <th data-field="departmentname">DepartmentName</th>
    </tr>
  </thead>
  <tbody>
    {data.map(item => (
      <tr key={item.userId}>
        <td>{item.userId}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.roleName}</td>
        <td>{item.managerName}</td>
        <td>{item.departmentName}</td>
        <td><button onClick={() => console.log(item)}>View</button></td>
        <td><button onClick={() => console.log(item)}>Edit</button></td>
        <td><button onClick={() => console.log(item)}>Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
</div>
 
   </>
  )
}
 
export default Admin
 