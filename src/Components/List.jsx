import React from 'react'

export const List = () => {
  return (
    <section className='flex items-center border-b py-3 last:border-b-0'>
        <ul>
          <li className='border-1 border-purple-400 w-98 h-25 p-3 rounded '>
            <input 
                type="checkbox" 
                name="check" 
                className="mr-4 h-5 w-5 rounded text-green-500 focus:ring-green-400 checked:bg-purple-500 checked:border-transparent 
                focus:outline-none appearance-none border border-gray-300 cursor-pointer checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center"
            />
            <h2 className='font-semibold'>Titulo</h2>
            <p className='text-sm text-gray-600'>Descripcion</p>
          </li>
        </ul>
      </section>
  )
}
