import UserList from "./UserList";
import React, { useState } from "react";

export default function UserWrapper() {
  const [userListt, setUserListt] = useState([
    {
      id: 1,
      firstName: "Alex",
      lastName: "John",
      email: "alex@gmail.com",
      mobile: "1234567890",
    },
  ]);
  return (
    <div>
      <UserList userList={userListt} />
    </div>
  );
}
