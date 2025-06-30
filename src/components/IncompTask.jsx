import React from "react";
import TaskCard from "./TaskCard";

const IncompTask = ({ tasks, fetchAllTasks }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks
          .filter(task => !task.completed)
          .map((task) => (
            <TaskCard key={task.id} task={task} fetchAllTasks={fetchAllTasks} />
          ))
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default IncompTask;
