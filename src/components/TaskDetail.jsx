import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import axios from "axios";


const TaskDeatail = async({task}) => {


    try {
    const res =  await axios.get(`http://localhost:8080/api/tasks/${task.id}`, {
       
      });
      fetchAllTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

export default TaskDeatail;