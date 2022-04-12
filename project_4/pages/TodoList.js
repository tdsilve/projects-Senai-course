import React, { useState } from 'react'

export default function TodoList({list}) {
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    setChecked(e.target.checked);
    console.log(checked)
  }

  return (
       <ul className="list-group">
        {list.map((task, index) => {
             
          return <li key={index} className="list-group-item">
              <input className="form-check-input me-3" type="checkbox" onClick={handleClick}/>
              <label className={`form=check-label ${checked ? 'todo-done' : ''}`}>{task}</label>
            </li> 
          })}
      </ul>

  )
}
