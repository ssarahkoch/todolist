import { useState } from "react";
import styles from "./Input.module.css";
import { PlusCircle } from "phosphor-react";

export function Input({ onChange }) {
  const [toDo, setToDo] = useState("");
  const disableEmptyButton = toDo.length === 0;

  function handleCreatNewTask() {
    onChange(toDo);
    setToDo("");
  }

  function handleNewTasksChange(event) {
    event.preventDefault();
    setToDo(event.target.value);
  }

  return (
    <div className={styles.taskBar}>
      <input
        value={toDo}
        onChange={handleNewTasksChange}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        onClick={handleCreatNewTask}
        disabled={disableEmptyButton}
      >
        Criar
        <PlusCircle className={styles.plusCircleIcon} weight="bold" size={17} />
      </button>
    </div>
  );
}
