import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    setUsername('');
    setPassword('');
  }
  const handleUsername = (event) => {
    setUsername(event.target.value);
  }
  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // }
  return (
    <div id='container'>
      <div id='navbar'>
        Form.js
      </div>
      <form onSubmit={handleSubmit}>
        {/* your form fields here */}
        <label htmlFor="username">Email:</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
