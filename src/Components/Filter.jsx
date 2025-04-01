import React, { useState } from 'react'
import { ButtonFilter } from './buttonFilter'

export const Filter = () => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);

  return (
    <section className='flex justify-center mb-6 py-4 gap-5'>
      <ButtonFilter type="all" filter={filter} setFilter={setFilter}>All</ButtonFilter>
      <ButtonFilter type="pending" filter={filter} setFilter={setFilter}>Pending</ButtonFilter>
      <ButtonFilter type="completed" filter={filter} setFilter={setFilter}>Completed</ButtonFilter>
    </section>
  )
}