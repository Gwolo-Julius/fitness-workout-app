// src/components/WorkoutCard.js
import React from "react";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <img src={workout.image} alt={workout.name} />
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
      <span>{workout.duration} mins</span>
    </div>
  );
};

export default WorkoutCard;
