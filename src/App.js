import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import StatusTabs from "./components/StatusTabs";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("upcoming");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // toggle for three dot menu

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, status: "upcoming" };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id, fields) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...fields } : t))
    );
  };

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const filtered = todos.filter((t) => t.status === filter);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 transition-colors">
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-4 sm:p-6 transition-colors">
          
          {/* Header */}
          <div className="relative flex items-center justify-center mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
              Todo List
            </h1>

            {/* Buttons on right */}
            <div className="absolute right-0 flex items-center gap-2">
              {/* Dark Mode Button */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="px-4 py-2 sm:px-5 sm:py-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 text-xs sm:text-sm transition"
              >
                {darkMode ? "Light" : "Dark"}
              </button>

              {/* Three Dot Menu (only visible on small screens) */}
              <div className="relative sm:hidden">
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  ⋮
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-2 z-50">
                    <StatusTabs filter={filter} setFilter={setFilter} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <TodoForm addTodo={addTodo} />

          {/* StatusTabs shown normally only on larger screens */}
          <div className="hidden sm:block">
            <StatusTabs filter={filter} setFilter={setFilter} />
          </div>

          {/* Todo list with fixed scroll area */}
          <div className="max-h-[80vh] overflow-y-auto pr-2">
            <TodoList
              todos={filtered}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}




// import React, { useState } from "react";
// import TodoForm from "./components/TodoForm";
// import StatusTabs from "./components/StatusTabs";
// import TodoList from "./components/TodoList";

// export default function App() {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState("upcoming");
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // toggle for three dot menu

//   const addTodo = (text) => {
//     const newTodo = { id: Date.now(), text, status: "upcoming" };
//     setTodos((prev) => [newTodo, ...prev]);
//   };

//   const updateTodo = (id, fields) => {
//     setTodos((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, ...fields } : t))
//     );
//   };

//   const deleteTodo = (id) =>
//     setTodos((prev) => prev.filter((t) => t.id !== id));

//   const filtered = todos.filter((t) => t.status === filter);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 transition-colors">
//         <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-4 sm:p-6 transition-colors">
          
//           {/* Header */}
//           <div className="mb-4">
//             {/* Title in first line (centered) */}
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">
//               Todo List
//             </h1>

//             {/* Buttons in second line (right aligned) */}
//             <div className="flex justify-end items-center gap-2">
//               {/* Dark Mode Button */}
//               <button
//                 onClick={() => setDarkMode((prev) => !prev)}
//                 className="px-4 py-2 sm:px-5 sm:py-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 text-xs sm:text-sm transition"
//               >
//                 {darkMode ? "Light" : "Dark"}
//               </button>

//               {/* Three Dot Menu (only visible on small screens) */}
//               <div className="relative sm:hidden">
//                 <button
//                   onClick={() => setMenuOpen((prev) => !prev)}
//                   className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
//                 >
//                   ⋮
//                 </button>
//                 {menuOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-2 z-50">
//                     <StatusTabs filter={filter} setFilter={setFilter} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <TodoForm addTodo={addTodo} />

//           {/* StatusTabs shown normally only on larger screens */}
//           <div className="hidden sm:block">
//             <StatusTabs filter={filter} setFilter={setFilter} />
//           </div>

//           <TodoList
//             todos={filtered}
//             updateTodo={updateTodo}
//             deleteTodo={deleteTodo}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
