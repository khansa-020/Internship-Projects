import React, { useState } from "react";

const STATUS_OPTIONS = [
  { value: "upcoming", label: "Upcoming" },
  { value: "inprogress", label: "In Progress" },
  { value: "completed", label: "Completed" }
];

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const save = () => {
    const t = text.trim();
    if (!t) return;
    updateTodo(todo.id, { text: t });
    setEditing(false);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 w-full">
      {/* Left section */}
      <div className="flex flex-1 items-start gap-3">
        <input
          type="checkbox"
          checked={todo.status === "completed"}
          onChange={() =>
            updateTodo(todo.id, {
              status:
                todo.status === "completed" ? "upcoming" : "completed"
            })
          }
          className="mt-1"
          aria-label="Mark as done"
        />

        <div className="flex-1">
          {editing ? (
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                className="flex-1 border rounded px-2 py-1"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                onClick={save}
                className="px-3 py-1 bg-green-600 text-white rounded w-full sm:w-auto"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditing(false);
                  setText(todo.text);
                }}
                className="px-3 py-1 bg-gray-200 rounded w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <p
                className={`text-sm break-words ${
                  todo.status === "completed"
                    ? "line-through text-gray-400 dark:text-gray-500"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {todo.text}
              </p>
              <small className="text-xs text-gray-500">
                {todo.status === "inprogress"
                  ? "In Progress"
                  : todo.status === "completed"
                  ? "Completed"
                  : "Upcoming"}
              </small>
            </div>
          )}
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:items-center">
        {!editing && (
          <select
            value={todo.status}
            onChange={(e) =>
              updateTodo(todo.id, { status: e.target.value })
            }
            className="border rounded px-2 py-1 w-full sm:w-auto"
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        )}
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="px-3 py-1 bg-yellow-400 rounded w-full sm:w-auto"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded w-full sm:w-auto"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
