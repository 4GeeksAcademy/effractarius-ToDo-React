import React from 'react';
import TodoList from './TodoList.jsx';

const Background = () => {
  return (
    <div>
      <div
        className="box"
        style={{
          maxWidth: '800px',
          margin: 'auto',
          height: '700px',
          backgroundColor: '#faf2f2ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'center',
          flexDirection: 'row',
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <div
          className="text-center mt-3"
        >
          <h1 style={{ color: '#f0d2d2ff', fontSize: "100px", fontWeight: 'lighter' }}>To Dos</h1>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Background;