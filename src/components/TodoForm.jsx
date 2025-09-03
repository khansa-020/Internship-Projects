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
      className="flex flex-row gap-2 w-full flex-wrap"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 min-w-[200px] border rounded px-3 py-2 mb-3 bg-white dark:bg-gray-700 dark:text-gray-100"
        placeholder="Add a new todo..."
      />
      <button className="px-4 py-2 mb-3 bg-indigo-600 text-white rounded whitespace-nowrap">
        Add
      </button>
    </form>
  );
}
