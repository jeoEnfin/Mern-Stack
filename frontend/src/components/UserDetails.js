import React from 'react'
import { useUserContext } from '../hooks/useUsersContext'

import formatDistaceToNow from 'date-fns/formatDistanceToNow'

function UserDetails({user}) {

    const {dispatch} = useUserContext()

    const handleClick = async () => {
        const response = await fetch(`/api/user/${user._id}`, {
          method: 'DELETE'
        })
        const json = await response.json()
    
        if(response.ok) {
            dispatch({type: 'DELETE_USER', payload: json})
        }
      }

    return (
        <div className='workout-details'>
            <h4>{user.username}</h4>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Description : </strong>{user.description}</p>
            <p>{formatDistaceToNow(new Date(user.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleClick} >delete</span>
        </div>
    )
}

export default UserDetails
