import "./App.css";
import { Counter } from "./counter/counter";
import TextField from "./Component/TextField";
import Chechkbox from "./Component/Chechkbox";
import TwoVariable from "./Component/TwoVariable";
import ArrayObject from "./Component/ArrayObject";
// import Todo from "./Todo/Todo";
import Todo from "./Todo/Todo";
import Basic from "./Basic";
import { FavoriteColor } from "./Component/HookExample";
import UserForm from "./UserCrud/UserForm";
import UserList from "./UserCrud/UserList";
// import UserWrapper from "./UserCrud/UserWrapper";

function App() {
  return (
    <div>
      {/* <Counter fname="Alok" lastname="Tiwari" />
      <Todo /> */}
      {/* <TextField />
      <Chechkbox />
      <TwoVariable />
      <ArrayObject /> */}
      {/* <Basic />
      <FavoriteColor /> */}
      <UserForm />
      <UserList />
      {/* <UserWrapper /> */}
    </div>
  );
}

export default App;
