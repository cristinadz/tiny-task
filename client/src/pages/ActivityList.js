import React, {useState, useEffect} from 'react'
import ActivityCard from '../components/ActivityCard';

function ActivityList() {
    const [ activities, setActivities ] = useState([])

    useEffect(() => {
        fetch("/activities")
          .then((r) => r.json())
          .then(setActivities);
      }, []);

    const activityCards = activities.map( (activity) => 
        <ActivityCard activity = { activity } />
    )

  return (
    <div>{activityCards}</div>
  )
}

export default ActivityList