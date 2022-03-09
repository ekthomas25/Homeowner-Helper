import React, { useState } from 'react';
import { timestamp } from '../firebase/config';

//styles
import './LogForm.css';

export default function LogForm({ handleCancelLogForm }) {
  const [completionDate, setCompletionDate] = useState('');
  const [cost, setCost] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logToAdd = {
      completionDate: timestamp.fromDate(new Date(completionDate)),
      cost,
      time,
      notes,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random() //ADD UUID HERE
    }

    console.log(logToAdd)
  }
  return (
    <div className="modal-bg">
      <div className="modal-log-form">
        <form className="log-form" onSubmit={handleSubmit}>
        <label>
          <span>Date of Completion:</span>
          <input
            type="date"
            onChange={(e) => setCompletionDate(e.target.value)} 
            value={completionDate} 
            required
          />
        </label>
        <label>
          <span>Cost:</span>
          <input 
            type="number"
            required
            onChange={(e) => setCost(e.target.value)} 
            value={cost} 
          />
        </label>
        <label>
          <span>Time Taken to Complete (hrs):</span>
          <input 
            type="number"
            required
            onChange={(e) => setTime(e.target.value)} 
            value={time} 
          />
        </label>
        <label>
          <span>Notes:</span>
          <textarea 
            type="text"
            onChange={(e) => setNotes(e.target.value)} 
            value={notes}>
          </textarea>
        </label>
        <button className="btn">Complete Task</button>
        <button className="btn" onClick={handleCancelLogForm}>Cancel</button>
        </form>
      </div>
    </div>
  )
}