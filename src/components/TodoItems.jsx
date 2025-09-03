import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const STATUS_OPTIONS = [
  { value: "upcoming", label: "Upcoming" },
  { value: "inprogress", label: "In Progress" },
  { value: "completed", label: "Completed" }
];

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);

  const save = () => {
    const t = text.trim();
    if (!t) return;
    updateTodo(todo.id, { text: t });
    setEditing(false);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 w-full relative">
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

        {/* text + 3-dot in same row */}
        <div className="flex-1 flex items-center justify-between">
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
            <div className="flex-1">
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

          {/* 3-dot status menu */}
          {!editing && (
            <div className="relative ml-2">
              <button
                onClick={() => setStatusMenuOpen(!statusMenuOpen)}
                className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <HiDotsVertical className="text-lg" />
              </button>

              {statusMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded shadow-lg z-20">
                  {STATUS_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => {
                        updateTodo(todo.id, { status: o.value });
                        setStatusMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right section - Edit + Delete */}
      <div className="flex gap-2 sm:items-center">
        {!editing && (
          <>
            <button
              onClick={() => setEditing(true)}
              className="px-3 py-1 bg-yellow-400 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}
