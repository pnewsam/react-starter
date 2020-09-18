import React from "react";
import { useQuery } from "react-query";
import { Task } from "../../types/Task";
import TaskListItem from "../TaskListItem";

const TaskList = () => {
  const { isLoading, error, data } = useQuery("tasks", async () => {
    const response = await fetch("/tasks");
    return response.json();
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Task List</h1>
      {data.tasks &&
        data.tasks.map((task: Task) => (
          <TaskListItem key={task.id} {...task}></TaskListItem>
        ))}
    </div>
  );
};

export default TaskList;
