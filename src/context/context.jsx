import { createContext, useState } from "react";

export const contextTask = createContext()

export const ProviderTask = ({ children }) => {

    const [title, setTitle] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tasks, setTasks] = useState({})

    // llaves azules significan logica y las amarillas es que es un objeto
    //children es lo que sea
    return (
        <contextTask.Provider value={{ 
          title,
          setTitle,
          descripcion,
          setDescripcion,
          tasks,
          setTasks
        }}>
          {children}
        </contextTask.Provider>
      );

}
