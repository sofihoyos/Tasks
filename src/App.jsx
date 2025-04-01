import React from 'react'
import { List } from './Components/List'
import { Filter } from './Components/Filter'
import { Form } from './Components/Form'


export const App = () => {
  return (
    <main className='max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg border-1 border-gray-200'>
      <h1 className='text-2xl font-bold text-center mb-6'>To-Do List</h1>
      <Form />
      <Filter />
      <List />
    </main>
  )
}
