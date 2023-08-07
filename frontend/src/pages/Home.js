import React,{useEffect,useState}from 'react';
import WorkoutsDetails from '../components/WorkoutsDetails';

function Home() {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if (response.ok){
                setWorkouts(json);
            }
        }
        fetchWorkouts()
    }, [])
  return (
    <div className='Home'>
        <div className='workouts'>
            {workouts && workouts.map(workout => (
               <WorkoutsDetails key={workout._id} workout={workout} />
            ))}
        </div>
    </div>
  )
}

export default Home