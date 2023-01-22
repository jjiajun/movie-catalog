import React, { useState, useEffect } from 'react';
import axios from 'axios';

 interface MovieGridProps {
  data: {
    "name": string,
    "productionYear": number,
    "genre": string,
    "synopsisShort": string,
    "synopsis": string,
  }[]
 }

export default function MovieGridComponent({data} : MovieGridProps) {
  const [movieData, setMovieData] = useState(data);

  // For logging purposes
  useEffect(() => {
    console.log(movieData);
  });

  return (
    <div>MovieGridComponents</div>
  );
}

