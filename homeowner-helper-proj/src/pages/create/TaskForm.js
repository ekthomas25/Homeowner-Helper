import React, {useState, useEffect, useRef } from 'react';
import { useFirestore } from '../../hooks/useFirestore';
import { useHistory } from 'react-router-dom';
import { timestamp } from '../../firebase/config';
import Select from 'react-select';

//styles
import './TaskForm.css'

const areas = [
  {value: 'exterior', label: 'Exterior' },
  {value: 'interior', label: 'Interior' },
  {value: 'plumbing', label: 'Plumbing' },
  {value: 'hvac', label: 'HVAC' },
  {value: 'roof', label: 'Roof' },
  {value: 'walkways', label: 'Walkways' },
  {value: 'windows', label: 'Windows' },
  {value: 'electrical', label: 'Electrical' },
  {value: 'doors', label: 'Doors' },
  {value: 'appliances', label: 'Appliances'},
]
const frequencies = [
  {value: '1', label: 'Yearly' },
  {value: '2', label: 'Bi-Yearly' },
  {value: '4', label: 'Quarterly' },
  {value: '12', label: 'Monthly' },
]

export default function TaskForm({ uid }) {
  const history = useHistory();
  const [taskName, setTaskName] = useState('');
  const [area, setArea] = useState('');
  const [frequency, setFrequency] = useState('');
  const [about, setAbout] = useState('');
  const [nextDue, setNextDue] = useState('');
  const [newMaterial, setNewMaterial] = useState('');
  const [materialList, setMaterialList] = useState([]);
  const materialInput = useRef(null)
  const [formError, setFormError] = useState(null)
  const { addDocument, response } = useFirestore('tasks')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null)
    if (!area || !frequency) {
      setFormError('please use the dropdown box to make a selection')
      return 
    }


    await addDocument({
      uid,
      taskName,
      area: area.label,
      frequency: frequency,
      about,
      nextDue: timestamp.fromDate(new Date(nextDue)), 
      materialList,
      logs: []
    })
    if(!response.error) {
      history.push('/')
    }

  }
// clears form after successful submission
  useEffect(() => {
    if(response.success) {
      setTaskName('');
      setArea('');
      setFrequency('');
      setAbout('');
      setNextDue('');
      setMaterialList([]);
    }
  }, [response.success])

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
    <div className="home">
      <h1>Add a Task</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          <span>Task Name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setTaskName(e.target.value)} 
            value={taskName} 
          />
        </label>
        <label>
          <span>Area of House:</span>
          <Select
          onChange={(option) => setArea(option)}
          options={areas}
          />
        </label>
        <label>
          <span>Frequency of Task:</span>
          <Select
          onChange={(option) => setFrequency(option)}
          options={frequencies}
          />        
        </label>
        <label>
          <span>About/Notes:</span>
          <textarea
            type="text"
            onChange={(e) => setAbout(e.target.value)} 
            value={about} 
            ></textarea>
        </label>
        <label>
          <span>Next Due:</span>
          <input
            type="date"
            onChange={(e) => setNextDue(e.target.value)} 
            value={nextDue} 
            required
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
            <br/>
            <button onClick={handleAdd} className="btn">Add Material</button>
            <p>Current Materials: {materialList.map(i => <em key={i}>{i}, </em>)}</p>
          </div>
        </label>
        <button className="btn">Add Task</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}