import React from "react";
import TodoItem from "./TodoItems";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  if (!todos.length) return <p className="text-center text-gray-500 mt-6">No todos here.</p>;
  return (
    <ul className="mt-4 space-y-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
