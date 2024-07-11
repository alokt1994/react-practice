import "./App.css";
import { Counter } from "./counter/counter";
// import { Routes, Route } from "react-router-dom";
import TextField from "./Component/TextField";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import Chechkbox from "./Component/Chechkbox";
// import TwoVariable from "./Component/TwoVariable";
// import ArrayObject from "./Component/ArrayObject";
// import Todo from "./Todo/Todo";
import Todo from "./Todo/Todo";
import Basic from "./Basic";
import { FavoriteColor } from "./Component/HookExample";
// import UserForm from "./UserCrud/UserForm";
import UserList from "./UserCrud/UserList";
// import UserWrapper from "./UserCrud/UserWrapper";
import RouteLink from "./Component/RouteLink";

function App() {
  return (
    <div>
      {/* <Counter fname="Alok" lastname="Tiwari" /> */}
      <Link to={"/text-field"}>Text-Field</Link>
      {/* <Todo /> */}
      {/* <TextField />
      <Chechkbox />
      <TwoVariable />
      <ArrayObject /> */}
      {/* <Basic />
      <FavoriteColor /> */}
      {/* <UserForm /> */}
      {/* <UserList /> */}
      {/* <UserWrapper /> */}
      <Routes>
        <Route path="/" element={<h1>This is first content</h1>} />
        <Route path="/user-list" element={<Todo />} />
        <Route path="/text-field" element={<TextField />} />
        <Route
          path="*"
          element={
            <div>
              <h1>This url not found</h1>
            </div>
          }
        ></Route>
      </Routes>
      <RouteLink />
    </div>
  );
}

export default App;
