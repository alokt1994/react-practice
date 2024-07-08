import React from "react";
import "./User.css";

export default function UserList({ userList }) {
  // <-- Destructure props here
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
