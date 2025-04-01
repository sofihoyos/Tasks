import React from "react";
import { useContextTask } from "../context/context";
import { TaskItem } from "./TaskItem";

export const List = () => {
  const { tasks, filter } = useContextTask(); // Extraer tasks y filter del contexto

  // Aplicar filtro a las tareas
  const filteredTasks = (() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "pending":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  })();

  return (
    <section className="flex flex-col gap-3">
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};
