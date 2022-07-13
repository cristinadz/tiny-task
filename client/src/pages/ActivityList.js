import React, {useState, useEffect, useMemo} from 'react'
import ActivityCard from '../components/ActivityCard';

function ActivityList() {
    const [ activities, setActivities ] = useState([])
    const [ category, setCategory ] = useState()

    useEffect(() => {
        fetch("/activities")
          .then((r) => r.json())
          .then(setActivities);
      }, []);

    // function filterEducation(e){
    //   console.log(e.target.value)
    //   let categoryName = e.target.value
    //   const filteredActivities = activities.filter((activity) => activity.category.name == categoryName );
    //   setActivities(filteredActivities);
    // }

    function getFilteredList(){
      if (!category){
        return activities
      }
      return activities.filter( activity => activity.category.name === category )
    }

    const filteredList = useMemo(getFilteredList, [category, activities]);

    function handleCategoryChange(e){
      setCategory(e.target.value)
    }

    const activityCards = filteredList.map( (activity) => 
    <ActivityCard activity = { activity } />
)

  return (
    

    
    <div> 
      <p> filter by category: </p>
      <button type='button' value = "Education" onClick={ handleCategoryChange }> Education </button>
      <button type='button' value = "Arts & Craft" onClick={ handleCategoryChange }> Arts & Crafts </button>
      <button type='button' value = "Movement" onClick={ handleCategoryChange }> Movement  </button>

      {activityCards}
    </div>
  )
}

export default ActivityList