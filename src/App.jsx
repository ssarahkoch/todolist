import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import uuid from "react-uuid";

import "./globol.css";

function App() {
  const [toDo, setToDo] = useState([]);

  const onChangeValue = (value) => {
    setToDo([...toDo, { id: uuid(), title: value, isTaskFinished: false }]);
  };
  function handleDeleteTask(idDeletePosition) {
    const taskWithoutDeletedOne = toDo.filter((item) => {
      return item.id !== idDeletePosition;
    });

    setToDo(taskWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <Input onChange={onChangeValue} />
      <Task toDo={toDo} setToDo={setToDo} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
