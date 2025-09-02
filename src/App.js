import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import StatusTabs from "./components/StatusTabs";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("upcoming");
  const [darkMode, setDarkMode] = useState(false); // 🌙 toggle state

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, status: "upcoming" };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id, fields) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...fields } : t)));
  };

  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const filtered = todos.filter((t) => t.status === filter);

  return (
    // 🌟 wrapper applies dark mode
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Todo List
            </h1>

            {/* 🌟 Theme toggle button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-500"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          <TodoForm addTodo={addTodo} />
          <StatusTabs filter={filter} setFilter={setFilter} />
          <TodoList
            todos={filtered}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}
