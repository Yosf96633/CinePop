import React from 'react';

const Features = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-gray-100 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
        CinePop Features
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600">
        Explore what makes CinePop the ultimate movie information platform.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Comprehensive Movie Info</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Access detailed movie data, including descriptions, ratings, and release dates.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Advanced Search</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Quickly search for movies and find exactly what you're looking for.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Genre-Based Content</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Browse movies by genre and discover new favorites easily.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Trending Movies</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Stay updated with the latest and most popular films in the industry.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Enjoy a smooth experience across all devices, from mobile to desktop.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Pagination for Easy Browsing</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Effortlessly navigate through movie listings with pagination controls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
