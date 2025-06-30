import React, { useEffect } from "react";
import { useParams } from "react-router";

const TaskDetail = ({ tasks, fetchAllTasks }) => {
  const { id } = useParams();
  const taskId = Number(id);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const selectedTask = tasks.find((task) => task.id === taskId);

  if (!selectedTask) {
    return <p>Loading or task not found.</p>;
  }

  return (
    <div>
      <h1>{selectedTask.title}</h1>
      <h2>{selectedTask.description}</h2>
      <p>Status: {selectedTask.completed ? "Completed" : "Incomplete"}</p>
    </div>
  );
};

export default TaskDetail;
