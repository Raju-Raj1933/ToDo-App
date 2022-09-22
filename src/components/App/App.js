import React, {useState} from 'react'
import List from '../Util/List'

const bodyContainer = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#46999b',
    padding: '10px',
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#769b99',
    borderRadius: '10px',
    width: '600px',
    boxShadow: '0 0 10px 0 rgba(255,255,255,.5',
}

function App() {
  return (
    <div style={bodyContainer}>
        <div style={todoListContainer}>
            <h1>Todo List</h1>

            <List/>
        </div>
    </div>
  )
}

export default App