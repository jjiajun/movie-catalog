/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import MovieGridComponent from '@/components/MovieGridComponent';
import Navbar from '@/components/NavBarComponent';

interface Data {
  'name': string,
  'productionYear': number,
  'genre': string,
  'synopsisShort': string,
  'synopsis': string,
  'posterUrl': string
 }

 interface HomeProps {
  data: Data[]
 }

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A movie catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-sans">
        <Navbar />
        <MovieGridComponent {...{ data }} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: Data[] }> = async (context) => {
  const { data } = await axios.get('https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies');

  // append url to data
  const updatedMovieData = await Promise.all(data.map(async (dataObj: Data) => {
    try {
    // Get movie data based on movie title
      const movieDataUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${dataObj.name}`;
      const movieDataUrlResponse = await axios.get(movieDataUrl);
      const posterPath = movieDataUrlResponse.data.results[0].poster_path;
      const posterUrl = `https://image.tmdb.org/t/p/w200${posterPath}`;
      const posterUrlResponse = await axios.get(posterUrl);
      const modifiedDataObj = { ...dataObj, posterUrl: posterUrlResponse.config.url! };
      return modifiedDataObj;
    } catch (error) {
      return console.log('Error updating movie data in getServerSideProps', error);
    }
  }));

  return {
    props: {
      data: updatedMovieData,
    },
  };
};
