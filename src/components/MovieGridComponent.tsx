import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieGridComponent() {
  const [movieData, setMovieData] = useState([]);

  // For logging purposes
  useEffect(() => {
    console.log(movieData);
  });

  // Get movie data from API
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const { data } = await axios.get(
          'https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies',
        );
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  }, []);

  return (
    <div>MovieGridComponent</div>
  );
}
