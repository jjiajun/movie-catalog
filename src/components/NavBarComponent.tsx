/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import projectDetails from '../global/constants/projectDetails';

const { PROJECT_NAME } = projectDetails;

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-32 justify-center">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-16 w-auto"
                src="/movie_reel_image.jpeg"
                alt={PROJECT_NAME}
              />
              <h1>Movie Catalog</h1>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
