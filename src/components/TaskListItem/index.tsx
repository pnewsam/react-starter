import React from "react";
import { Task, CompleteTaskPayload } from "../../types/Task";
import styles from "./styles.module.css";

const TaskListItem = (task: Task) => {
  const { completed, text } = task;

  const completeTask = async () => {
    const body: CompleteTaskPayload = {
      task: { id: task.id, completed: true },
    };
    const response = await fetch("/tasks/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  return (
    <div className={styles.root}>
      <button onClick={completeTask}>Complete</button>
      <p>{text}</p>
      <p>{completed ? "Complete" : "Incomplete"}</p>
      <button>Delete</button>
    </div>
  );
};

export default TaskListItem;
