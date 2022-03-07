import React, {useState, useEffect, useRef } from 'react';

export default function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [area, setArea] = useState('');
  const [frequency, setFrequency] = useState('');
  const [about, setAbout] = useState('');
  const [nextDue, setNextDue] = useState('');
  const [newMaterial, setNewMaterial] = useState('');
  const [materialList, setMaterialList] = useState([]);
  const materialInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName, area, frequency, about, nextDue, materialList)

  }

  const handleAdd = (e) => {
    e.preventDefault();
    const material = newMaterial.trim();
    
    if (material && !materialList.includes(material)) {
      setMaterialList(prevMaterials => [...prevMaterials, material])
    }
    setNewMaterial('');
    materialInput.current.focus()
  }

  return (
    <>
      <h3>Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Task Name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setTaskName(e.target.value)} 
            value={taskName} 
          />
        </label>
        {/* Add Dropdown selctor for Area */}
        {/* Add Dropdown selctor for Frequency */}
        <label>
          <span>About/Notes:</span>
          <input
            type="text"
            required
            onChange={(e) => setAbout(e.target.value)} 
            value={about} 
          />
        </label>
        <label>
          <span>Next Due:</span>
          <input
            type="date"
            onChange={(e) => setNextDue(e.target.value)} 
            value={nextDue} 
          />
        </label>
        <label>
          <span></span>
          <div className="materials">
            <input
            type="text"
            onChange={(e) => setNewMaterial(e.target.value)}
            value={newMaterial}
            ref={materialInput}
            />
            <button onClick={handleAdd} className="btn">Add Material</button>
            <p>Current Materials: {materialList.map(i => <em key={i}>{i}, </em>)}</p>
          </div>
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}