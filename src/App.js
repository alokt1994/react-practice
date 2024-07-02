import "./App.css";
import { Counter } from "./counter/counter";
import TextField from "./Component/TextField";
import Chechkbox from "./Component/Chechkbox";
import TwoVariable from "./Component/TwoVariable";
import ArrayObject from "./Component/ArrayObject";
// import Todo from "./Todo/Todo";
import Todo from "./Todo/Todo";

function App() {
  return (
    <div>
      {/* <Counter fname="Alok" lastname="Tiwari" /> */}
      <Todo />
      {/* <TextField />
      <Chechkbox />
      <TwoVariable />
      <ArrayObject /> */}
    </div>
  );
}

export default App;
