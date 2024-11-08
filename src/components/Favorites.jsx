// src/components/Favorites.js
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h2>Favorite Workouts</h2>
      {favorites.length ? (
        favorites.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))
      ) : (
        <p>No favorite workouts yet.</p>
      )}
    </div>
  );
};

export default Favorites;
