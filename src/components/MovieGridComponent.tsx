/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

 interface MovieGridProps {
  data: {
    'name': string,
    'productionYear': number,
    'genre': string,
    'synopsisShort': string,
    'synopsis': string,
    'posterUrl': string
  }[]
 }

export default function MovieGridComponent({ data } : MovieGridProps) {
  const [movieData, setMovieData] = useState(data);

  // For logging purposes
  useEffect(() => {
    console.log(movieData);
  });

  const handleClick = () => {
    console.log('hi');
  };

  const cardMarkup = movieData.map(({
    genre, posterUrl, synopsisShort,
  }, index) => (
    <div
      className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative"
      key={index}
      onClick={handleClick}
    >
      <img className="w-full rounded-2xl" src={posterUrl} alt="movie poster" />
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 z-20 absolute top-4 right-2">{genre}</div>
      <span className="text-xs mb-2 absolute bottom-4">{synopsisShort}</span>
    </div>
  ));

  return (
    <div className="grid grid-cols-4 gap-16 p-16">{cardMarkup}</div>
  );
}
