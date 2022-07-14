import React, { useState, useEffect, useMemo } from 'react';
import ActivityCard from '../components/ActivityCard';
import { Box, Container, Heading, Stack, Button } from '@chakra-ui/react';

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch('/activities')
      .then((r) => r.json())
      .then(setActivities);
  }, []);

  // function filterEducation(e){
  //   console.log(e.target.value)
  //   let categoryName = e.target.value
  //   const filteredActivities = activities.filter((activity) => activity.category.name == categoryName );
  //   setActivities(filteredActivities);
  // }

  function getFilteredList() {
    if (!category) {
      return activities;
    }
    return activities.filter((activity) => activity.category.name === category);
  }

  const filteredList = useMemo(getFilteredList, [category, activities]);

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  const activityCards = filteredList.map((activity) => (
    <ActivityCard activity={activity} />
  ));

  return (
    <Box p={5}>
      <Stack spacing={4} as={Container} maxW={'400px'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Filter by Category</Heading>
        <Button
          bg={'green.300'}
          value='Education'
          onClick={handleCategoryChange}
        >
          {' '}
          Education{' '}
        </Button>
        <Button
          bg={'green.300'}
          value='Arts & Crafts'
          onClick={handleCategoryChange}
        >
          {' '}
          Arts & Crafts{' '}
        </Button>
        <Button
          bg={'green.300'}
          value='Movement'
          onClick={handleCategoryChange}
        >
          {' '}
          Movement{' '}
        </Button>
      </Stack>

      <Container>{activityCards}</Container>
    </Box>
  );
}

export default ActivityList;
