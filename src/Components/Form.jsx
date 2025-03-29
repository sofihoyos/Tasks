import { useContext, useEffect, useState } from 'react'
import { contextTask } from '../context/context';

export const Form = () => {
    //Montaje: El componente se añade al DOM.
    //Actualización: El componente se actualiza.
    //Desmontaje: el componente se elimina del DOM


    const { title, setTitle, description, setDescripcion, tasks, setTasks } = useContext(contextTask)

    const addTask = (e) => {
  
      e.preventDefault()
      const currentTask = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false
      }
      if (title.trim() === "" || description.trim() === "") {
        alert("Please fill in all fields")
        return
      } else {
        setTasks([...tasks, currentTask])
        setTitle("")
        setDescription("")
      }
    }
  
    useEffect(() => {
      alert('Tarea creada')
    }, [tasks])

  return (
    <form onSubmit={addTask} >
        <input 
            type="text"  
            placeholder='Nombre de la tarea' 
            value={title}
            onChange={(e) => setTitle(e.target.value.trim())}
            className='w-full px-3 py-2 border border-purple-400 rounded-md mb-4 b'
        />
        <textarea
            placeholder='Descripción' 
            value={description}
            onChange={(e) => setDescripcion(e.target.value.trim())}
            className='w-full px-3 py-2 border border-purple-400 rounded-md mb-4 '
        />

        <button 
            type='submit' 
            className='w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition-colors'
        >Add Task</button>
    </form>
  )
}
