import React,{useEffect} from 'react'
import Form from '../components/Form'
import UserDetails from '../components/UserDetails'
import { useUserContext } from '../hooks/useUsersContext'

const Practice = () => {
  const {users ,dispatch} = useUserContext();

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await fetch('/api/user/');
        const json = await response.json();

        if (response.ok){
         dispatch({type: 'SET_USERS', payload: json});
        }
    }
    fetchUsers()
}, [dispatch])

  return (
    <div className='home'>
       <div className='workouts'>
            {users && users.map(user => (
              <UserDetails key={user._id} user={user} />
            ))}
        </div>
      <Form />
    </div>
  )
}

export default Practice