import React from 'react'

function ActivityCard({activity}) {

    function handleAddFavorite(e){
        console.log(e.target.value)

        // fetch('/favorited_activities', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ activity }),
        //   })
    }

  return (
    <div>
        <h3> {activity.name} </h3>
        <img alt='{activity.name}' src={activity.image}/>
        <p>category: {activity.category.name}</p>
        <button>see more</button>
        <button onClick={handleAddFavorite} value={activity.id}> 💟 </button>
    </div>
  )
}

export default ActivityCard