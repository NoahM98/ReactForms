import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    setUsername('')
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  return (
    <div id='container'>
      <div id='navbar'>
        Form.js
      </div>
      <form onSubmit={handleSubmit}>
        {/* your form fields here */}
        <label htmlFor="username"></label>
        <input type="text" name="username" value={username} onChange={handleChange}/>
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
