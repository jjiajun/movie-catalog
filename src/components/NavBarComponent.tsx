import React from 'react';
import projectDetails from '../global/constants/projectDetails';

const { PROJECT_NAME } = projectDetails;

export default function Navbar() {
  return (
    <nav className="w-full shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="/movie_reel_image.jpeg"
                alt={PROJECT_NAME}
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="/movie_reel_image.jpeg"
                alt={PROJECT_NAME}
              />
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  )
}