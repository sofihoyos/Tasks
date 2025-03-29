import React from 'react'

export const Filter = () => {
  return (
    <section className='flex justify-center mb-6 py-4'>
        <input 
            type="button" 
            name='option'  
            value="All" 
            className='px-4 py-2 mx-1 rounded-md border border-purple-400'
        />
        
        <input 
            type="button" 
            name='option'  
            value="Pending" 
            className='px-4 py-2 mx-1 rounded-md border border-purple-400'
        />

        <input 
            type="button" 
            name='option' 
            value="Completed" 
            className='px-4 py-2 mx-1 rounded-md border border-purple-400'
        />
        
      </section>
  )
}
