// src/pages/Home.js
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WorkoutList from "../components/WorkoutList";
import { workouts } from "../data/workouts";

const Home = () => {
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

  const handleSearch = (query) => {
    const results = workouts.filter((workout) =>
      workout.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWorkouts(results);
  };

  return (
    <div>
      <h1>FitTrack</h1>
      <SearchBar onSearch={handleSearch} />
      <WorkoutList workouts={filteredWorkouts} />
    </div>
  );
};

export default Home;
