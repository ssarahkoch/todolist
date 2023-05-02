import { useState } from "react";
import styles from "./Task.module.css";
import clipboard from "../assets/clipboard.svg";
import { Check, Circle, Trash } from "phosphor-react";

export function Task({ toDo, setToDo, deleteTask }) {
  const createdTasks = toDo.length;

  function handleDeleteTask(id) {
    deleteTask(id);
  }
  const uptadeFinishedTask = toDo.filter((item) => {
    return item.isTaskFinished;
  });

  function handleChangeCircleToCheck(id) {
    const uptadeToDo = toDo.map((item) =>
      item.id === id ? { ...item, isTaskFinished: !item.isTaskFinished } : item
    );
    setToDo(uptadeToDo);
  }

  function handleChangeCheckToCircle(id) {
    const uptadeCheckToCircle = toDo.map((item) =>
      item.id === id ? { ...item, isTaskFinished: !item.isTaskFinished } : item
    );
    setToDo(uptadeCheckToCircle);
  }

  return (
    <div>
      <div className={styles.container}>
        <a className={styles.createdTasks}>
          Tarefas criadas{" "}
          <span className={styles.numCreatedTasks}>{createdTasks}</span>
        </a>

        <a className={styles.finishedTasks}>
          Concluídas{" "}
          {createdTasks === 0 ? (
            <span className={styles.numFinishedTasks}>
              {uptadeFinishedTask.length}
            </span>
          ) : (
            <span className={styles.numFinishedTasks}>
              {uptadeFinishedTask.length} de {createdTasks}
            </span>
          )}
        </a>
      </div>

      {toDo.length !== 0 ? (
        toDo.map((item) => (
          <div key={item.id} className={styles.itemTask}>
            {item.isTaskFinished === false ? (
              <Circle
                onClick={() => handleChangeCircleToCheck(item.id)}
                size={23}
                weight="bold"
                className={styles.circleIcon}
              />
            ) : (
              <Check
                className={styles.checkIcon}
                weight="bold"
                size={19}
                onClick={() => handleChangeCheckToCircle(item.id)}
              />
            )}

            {item.isTaskFinished === false ? (
              <span>{item.title}</span>
            ) : (
              <span className={styles.titleWhenCheckIsOn}>{item.title}</span>
            )}
            <div className={styles.trash}>
              <Trash
                size={19}
                weight="bold"
                className={styles.trashIcon}
                onClick={() => handleDeleteTask(item.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div className={styles.taskContainer}>
          <div className={styles.contentTask}>
            <img src={clipboard} />

            <p className={styles.emptyScreenTxtOne}>
              Você ainda não tem tarefas cadastradas
            </p>

            <p className={styles.emptyScreenTxtTwo}>
              Crie tarefas e organize seus items a fazer
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
