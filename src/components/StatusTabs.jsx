import React from "react";

const TABS = [
  { key: "upcoming", label: "Upcoming" },
  { key: "inprogress", label: "In Progress" },
  { key: "completed", label: "Completed" }
];

export default function StatusTabs({ filter, setFilter }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 my-4 w-full">
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => setFilter(t.key)}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-full text-center transition 
            ${
              filter === t.key
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
