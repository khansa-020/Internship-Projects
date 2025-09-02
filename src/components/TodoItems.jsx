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
    <li className="flex items-start justify-between p-3 border rounded-lg">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.status === "completed"}
          onChange={() =>
            updateTodo(todo.id, { status: todo.status === "completed" ? "upcoming" : "completed" })
          }
          className="mt-1"
          aria-label="Mark as done"
        />
        <div>
          {editing ? (
            <div className="flex gap-2">
              <input className="border rounded px-2 py-1" value={text} onChange={e => setText(e.target.value)} />
              <button onClick={save} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
              <button onClick={() => { setEditing(false); setText(todo.text); }} className="px-3 py-1 bg-gray-200 rounded">Cancel</button>
            </div>
          ) : (
            <div>
<li className="flex items-start justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
  <p className={`text-sm ${todo.status === "completed" ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-gray-100"}`}>
    {todo.text}
  </p>
  </li>              <small className="text-xs text-gray-500">
                {todo.status === "inprogress" ? "In Progress" : todo.status === "completed" ? "Completed" : "Upcoming"}
              </small>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!editing && (
          <select value={todo.status} onChange={(e) => updateTodo(todo.id, { status: e.target.value })} className="border rounded px-2 py-1">
            {STATUS_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        )}
        {!editing && <button onClick={() => setEditing(true)} className="px-3 py-1 bg-yellow-400 rounded">Edit</button>}
        <button onClick={() => deleteTodo(todo.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </li>
  );
}
