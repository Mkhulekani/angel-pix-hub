import { useState, useEffect } from 'react';
import { Navigation } from "@/components/Navigation";
import { TrailerModal } from "@/components/TrailerModal";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import { DashboardPage } from "./DashboardPage";
import { SearchResultsPage } from "./SearchResultsPage";
import { GenrePage } from "./GenrePage";
import { mockAPI, Movie, User } from "@/lib/mockAPI";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genreMovies, setGenreMovies] = useState<Movie[]>([]);
  const [watchHistory, setWatchHistory] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (user) {
      loadWatchHistory();
    }
  }, [user]);

  const loadWatchHistory = async () => {
    try {
      const history = await mockAPI.getUserWatchHistory(user!.id);
      setWatchHistory(history);
    } catch (error) {
      console.error('Error loading watch history:', error);
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        const results = await mockAPI.searchMovies(searchQuery);
        setSearchResults(results);
        setCurrentPage('search');
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };

  const handleGenreClick = async (genreKey: string) => {
    try {
      const movies = await mockAPI.getMoviesByGenre(genreKey);
      setGenreMovies(movies);
      setSelectedGenre(genreKey);
      setCurrentPage('genre');
    } catch (error) {
      console.error('Genre fetch error:', error);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const userData = await mockAPI.login(email, password);
      setUser(userData);
      setCurrentPage('dashboard');
    } catch (error) {
      alert('Login failed: ' + (error as Error).message);
    }
  };

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      const userData = await mockAPI.signup(name, email, password);
      setUser(userData);
      setCurrentPage('dashboard');
    } catch (error) {
      alert('Signup failed: ' + (error as Error).message);
    }
  };

  const handleWatchMovie = async (movie: Movie) => {
    if (user) {
      await mockAPI.addToWatchHistory(user.id, movie.id);
      loadWatchHistory();
    }
    setSelectedMovie(movie);
    setShowTrailer(true);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    setWatchHistory([]);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gradient-cinema">
      {/* Fixed Navigation */}
      {(user || currentPage !== 'home') && (
        <Navigation 
          user={user} 
          onNavigate={handleNavigate} 
          onLogout={handleLogout} 
        />
      )}

      {/* Page Rendering */}
      {currentPage === 'home' && (
        <HomePage 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          onGenreClick={handleGenreClick}
          onNavigate={handleNavigate}
          user={user}
        />
      )}

      {currentPage === 'login' && (
        <LoginPage 
          onLogin={handleLogin}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'signup' && (
        <SignupPage 
          onSignup={handleSignup}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'dashboard' && user && (
        <DashboardPage 
          user={user}
          watchHistory={watchHistory}
          onNavigate={handleNavigate}
          onWatchMovie={handleWatchMovie}
        />
      )}

      {currentPage === 'search' && (
        <SearchResultsPage 
          searchQuery={searchQuery}
          searchResults={searchResults}
          onNavigate={handleNavigate}
          onWatchMovie={handleWatchMovie}
        />
      )}

      {currentPage === 'genre' && (
        <GenrePage 
          selectedGenre={selectedGenre}
          genreMovies={genreMovies}
          onNavigate={handleNavigate}
          onWatchMovie={handleWatchMovie}
        />
      )}

      {/* Trailer Modal */}
      <TrailerModal 
        isOpen={showTrailer}
        movie={selectedMovie}
        onClose={handleCloseTrailer}
      />
    </div>
  );
};

export default Index;
