import React from "react";
import { useContextTask } from "../context/context";

export const TaskItem = ({ task }) => {
  const { toggleTaskStatus } = useContextTask();

  return (
    <li className="border border-purple-400 w-full p-4 rounded shadow-md flex flex-col m-2">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskStatus(task.id)}
          className="h-5 w-5 rounded text-green-500 "
          aria-label={`Mark ${task.title} as ${task.completed ? "incomplete" : "complete"}`}
        />
        <div>
          <h2 className={`font-semibold ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </h2>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
      </label>
    </li>
  );
};
