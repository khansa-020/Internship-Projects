import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 w-full"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-gray-100 w-full"
        placeholder="Add a new todo..."
      />
      <button className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded">
        Add
      </button>
    </form>
  );
}
