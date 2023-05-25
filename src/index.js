import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    console.log(username);
  }
  return (
    <div id='container'>
      <div id='navbar'>
        Form.js
      </div>
      <form onSubmit={handleSubmit}>
        {/* your form fields here */}
        <label htmlFor="username"></label>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
