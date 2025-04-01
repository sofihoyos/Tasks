import { createContext, useContext, useState } from "react";

const contextTask = createContext()

export const ProviderTask = ({ children }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("all");

    // llaves azules significan logica y las amarillas es que es un objeto
    //children es lo que sea

    const toggleTaskStatus = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };


     

    return (
        <contextTask.Provider value={{ 
          title,
          setTitle,
          description,
          setDescription,
          tasks,
          setTasks,
          toggleTaskStatus,
          filter,
          setFilter
        }}>
          {children}
        </contextTask.Provider>
      );
}

export const useContextTask = () => useContext(contextTask);