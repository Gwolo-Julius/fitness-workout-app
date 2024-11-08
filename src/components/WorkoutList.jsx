// src/components/WorkoutList.js
import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts }) => (
  <div className="workout-list">
    {workouts.map((workout) => (
      <WorkoutCard key={workout.id} workout={workout} />
    ))}
  </div>
);

export default WorkoutList;
