import React from "react";

const TABS = [
  { key: "upcoming", label: "Upcoming" },
  { key: "inprogress", label: "In Progress" },
  { key: "completed", label: "Completed" }
];

export default function StatusTabs({ filter, setFilter }) {
  return (
    <div className="flex gap-2 my-4">
      {TABS.map(t => (
        <button
          key={t.key}
          onClick={() => setFilter(t.key)}
          className={`px-4 py-2 rounded-full ${
            filter === t.key ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
