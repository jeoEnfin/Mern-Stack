import React, { useState } from 'react';
import { useUserContext } from '../hooks/useUsersContext';

function Form() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [description,setDescription] = useState('')
  const [error,setError] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  const {dispatch} = useUserContext();



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const users = {username, email, description}
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(users),
        headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if(response.ok){
      setUsername('')
      setEmail('')
      setDescription('')
      setError(null)
      setEmptyFields([])
      console.log('new workout created',json)
      dispatch({type: 'CREATE_USER',payload: json})
  }

  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={emptyFields.includes('username') ? 'error' : ''}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emptyFields.includes('email') ? 'error' : ''}
        />
      </label>
      <label>
        Message:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={emptyFields.includes('description') ? 'error' : ''}
        />
      </label>
      <button type="submit">Submit</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
}

export default Form;
