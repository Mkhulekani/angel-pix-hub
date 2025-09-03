// Mock API functions for the movie platform
export const mockAPI = {
  // Movie database with YouTube trailer IDs and high-quality posters
  movies: [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      genre: "action",
      year: 2021,
      rating: 8.4,
      poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      trailer: "JfVOs4VSpmA",
      description: "Spider-Man faces his greatest challenge yet when mysterious villains from other universes arrive."
    },
    {
      id: 2,
      title: "The Batman",
      genre: "action",
      year: 2022,
      rating: 7.8,
      poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      trailer: "mqqft2x_Aa4",
      description: "The Dark Knight returns in this noir-inspired thriller featuring Robert Pattinson."
    },
    {
      id: 3,
      title: "Hereditary",
      genre: "horror",
      year: 2018,
      rating: 7.3,
      poster: "https://image.tmdb.org/t/p/w500/p81a0ttaGsINoqMTjgUrVjz7MIQ.jpg",
      trailer: "V6wWKNij_1M",
      description: "A family haunted by tragedy discovers dark secrets about their ancestry."
    },
    {
      id: 4,
      title: "Interstellar",
      genre: "sci-fi",
      year: 2014,
      rating: 8.6,
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      trailer: "zSWdZVtXT7E",
      description: "A team of explorers travel through a wormhole in space to save humanity."
    },
    {
      id: 5,
      title: "The Notebook",
      genre: "romantic",
      year: 2004,
      rating: 7.8,
      poster: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
      trailer: "4M7LIcH8C9U",
      description: "A poor yet passionate young man falls in love with a rich young woman."
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      genre: "drama",
      year: 1994,
      rating: 9.3,
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1QQQ0VoNYfSUMhzJnIc6d.jpg",
      trailer: "6hB3S9bIaco",
      description: "Two imprisoned men bond over years, finding solace through acts of decency."
    },
    {
      id: 7,
      title: "Avengers: Endgame",
      genre: "action",
      year: 2019,
      rating: 8.4,
      poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      trailer: "TcMBFSGVi1c",
      description: "The Avengers assemble once more to reverse the devastation caused by Thanos."
    },
    {
      id: 8,
      title: "Dune",
      genre: "sci-fi",
      year: 2021,
      rating: 8.0,
      poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      trailer: "8g18jFHCLXk",
      description: "Feature adaptation of Frank Herbert's science fiction novel about a gifted young man."
    },
    {
      id: 9,
      title: "The Conjuring",
      genre: "horror",
      year: 2013,
      rating: 7.5,
      poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
      trailer: "k10ETZ41q5o",
      description: "Paranormal investigators help a family terrorized by a dark presence."
    },
    {
      id: 10,
      title: "La La Land",
      genre: "romantic",
      year: 2016,
      rating: 8.0,
      poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      trailer: "0pdqf4P9MB8",
      description: "A jazz musician and an aspiring actress fall in love in Los Angeles."
    },
    {
      id: 11,
      title: "Parasite",
      genre: "drama",
      year: 2019,
      rating: 8.5,
      poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      trailer: "5xH0HfJHsaY",
      description: "A poor family schemes to become employed by a wealthy family."
    },
    {
      id: 12,
      title: "Blade Runner 2049",
      genre: "sci-fi",
      year: 2017,
      rating: 8.0,
      poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      trailer: "gCcx85zbxz4",
      description: "A young blade runner discovers a secret that could plunge society into chaos."
    }
  ],

  searchMovies: async (query: string) => {
    return mockAPI.movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  },

  getMoviesByGenre: async (genre: string) => {
    return mockAPI.movies.filter(movie => movie.genre === genre);
  },

  login: async (email: string, password: string) => {
    if (email && password) {
      return {
        id: 1,
        name: "John Doe",
        email: email,
        watchHistory: [1, 2, 4],
        favorites: [1, 4]
      };
    }
    throw new Error("Invalid credentials");
  },

  signup: async (name: string, email: string, password: string) => {
    if (name && email && password) {
      return {
        id: Date.now(),
        name: name,
        email: email,
        watchHistory: [],
        favorites: []
      };
    }
    throw new Error("Invalid signup data");
  },

  addToWatchHistory: async (userId: number, movieId: number) => {
    // Mock implementation
    return true;
  },

  getUserWatchHistory: async (userId: number) => {
    const historyIds = [1, 2, 4];
    return mockAPI.movies.filter(movie => historyIds.includes(movie.id));
  }
};

export const genres = [
  { name: 'Action', key: 'action' },
  { name: 'Sci-Fi', key: 'sci-fi' },
  { name: 'Horror', key: 'horror' },
  { name: 'Drama', key: 'drama' },
  { name: 'Romantic', key: 'romantic' }
];

export type Movie = typeof mockAPI.movies[0];
export type User = {
  id: number;
  name: string;
  email: string;
  watchHistory: number[];
  favorites: number[];
};