import React, { useState } from "react";
import UserList from "./UserList";

export default function UserWrapper() {
  const [userList, setUserList] = useState([
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
      <UserList userList={userList} />
    </div>
  );
}
