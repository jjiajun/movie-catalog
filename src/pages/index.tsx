/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import React from 'react';
import MovieGridComponent from '@/components/MovieGridComponent';
import Navbar from '@/components/NavBarComponent';
import { GetServerSideProps } from 'next'
import axios from 'axios';

interface Data {
  "name": string,
  "productionYear": number,
  "genre": string,
  "synopsisShort": string,
  "synopsis": string,
 }

 interface HomeProps {
  data: Data[]
 }

export default function Home({data}: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A movie catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <MovieGridComponent {...{data}} />
      </main>
    </>
  );
}


export const getServerSideProps: GetServerSideProps<{ data: Data[] }> = async (context) => {
  const { data } = await axios.get('https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies')

  // Get movie images and append to data
  
  return {
    props: {
      data
    },
  }
}