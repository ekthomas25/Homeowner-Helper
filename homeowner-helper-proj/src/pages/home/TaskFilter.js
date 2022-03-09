import React from 'react';

const filterList = ['all', 'Exterior', 'Interior', 'Plumbing', 'HVAC', 'Roof', 'Walkways', 'Windows', 'Electrical', 'Doors', 'Appliances']

export default function TaskFilter({ currentFilter, changeFilter }) {
  

  const handleClick = (newFilter) => {
    console.log(newFilter)
    changeFilter(newFilter)
  }
  return (
    <div className="task-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
            >
            {f}
          </button>
        ))}
      </nav>
    </div>
  )
}