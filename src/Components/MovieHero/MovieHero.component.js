import React from "react";

const MovieHero = () => {
  // You can replace these URLs with actual movie data from an API
  const moviePosterUrl =
    "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg";
  const movieThumbnailUrl =
    "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg";

  return (
    <div className="relative">
      {/* Large screen */}
      <div className="hidden lg:block">
        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />

        <div className="absolute z-30 w-64 h-96 left-64 top-10">
          <img
            src={movieThumbnailUrl}
            alt="poster"
            className="h-full w-full rounded-xl"
          />
        </div>

        <img
          src={moviePosterUrl}
          alt="poster"
          className="w-full h-full"
        />
      </div>

      {/* Medium screen */}
      <div className="hidden md:block lg:hidden">
        <img
          src={moviePosterUrl}
          alt="poster"
          className="w-full"
        />
      </div>

      {/* Small screen */}
      <div className="md:hidden">
        <img
          src={moviePosterUrl}
          alt="poster"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MovieHero;
