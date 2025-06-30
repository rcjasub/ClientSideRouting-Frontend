import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import TaskCard from "./components/TaskCard";
import CompTask from "./components/CompTask";
import IncompTask from "./components/IncompTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get("http://localhost:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  // const FilterTask = ({tasks, fetchAllTasks}) => {
  //   tasks.filter((task))
  // }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks} />}
        />

        <Route
          path="/comp"
          element={<CompTask tasks={tasks} fetchAllTasks={fetchAllTasks} />}
        />

        <Route
          path="/incomp"
          element={<IncompTask tasks={tasks} fetchAllTasks={fetchAllTasks} />}
        />

        <Route
          path="/AddTask"
          element={<AddTask fetchAllTasks={fetchAllTasks} />}
        />

        <Route
          path="/task/:id"
          element={<TaskDetail tasks={tasks} fetchAllTasks={fetchAllTasks} />}
        />

        {/* Currently, we don't have any routes defined. And you can see above that we're
            rendering the TaskList and AddTask components directly, no matter what our URL looks like.
            Let's fix that! */}
      </Routes>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
