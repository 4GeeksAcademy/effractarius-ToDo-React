import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: 'auto',
        padding: '1rem',
        backgroundColor: 'whitesmoke',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        fontFamily: 'typewriter, monospace',
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #ddd',
          fontWeight: 'lighter',
        }}
      />
      <ul style={{ padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              listStyle: 'none',
              width: '100%',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem',
              borderBottom: '1px solid #ccc',
            }}
          >
            {task}
            <button
              onClick={() => handleDelete(index)}
              style={{
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontWeight: 'lighter',
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div
        style={{
          padding: '0.5rem',
          borderTop: '1px solid #ccc',
          textAlign: 'right',
          fontStyle: 'italic',
          color: '#555',
        }}
      >
        {tasks.length === 0
          ? 'Sin tareas pendientes'
          : `Tiene ${tasks.length} tarea${tasks.length > 1 ? 's' : ''}.`}
      </div>
    </div>
  );
};

export default TodoList;