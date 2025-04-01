import React from 'react'
import { useContextTask } from '../context/context';

export const ButtonFilter = ({ type,  children }) => {
  const { filter, setFilter } = useContextTask();

  return (
    <button
      onClick={() => setFilter(type)}
      className={`px-4 py-2  border border-gray-300 rounded ${
        filter === type ? "bg-gray-200" : "bg-white"
      }`}
    >
      {children}
    </button>
  );
};

// 