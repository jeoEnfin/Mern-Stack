import React,{useState}from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
       
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout created',json)
            dispatch({type: 'CREATE_WORKOUT',payload: json})
        }
    }

  return (
   <form className='create' onSubmit={handleSubmit}>
    <h3>Add new workout</h3>

    <label>Excersize Title: </label>
    <input className={emptyFields.includes('title') ? 'error' : ''}
     type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
    <label>Load (kg): </label>
    <input className={emptyFields.includes('load') ? 'error' : ''}
     type='number' value={load} onChange={(e) => setLoad(e.target.value)}/>
    <label>Reps: </label>
    <input className={emptyFields.includes('reps') ? 'error' : ''} 
    type='number' value={reps} onChange={(e) => setReps(e.target.value)}/>

    <button type='submit'>Add workout</button>
    {error && <div className='error'>{error}</div>}
   </form>
  )
}

export default WorkoutForm