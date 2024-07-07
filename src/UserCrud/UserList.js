import React, { useState } from "react";
import "./User.css";
// import "./App.css";
export default function UserList() {
  const [userListt, setUserListt] = useState([
    {
      id: 1,
      firstName: "Alex",
      lastName: "John",
      email: "rohit@gmail.com",
      mobile: "1234567890",
    },
  ]);

  return (
    <div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
        {userListt.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
