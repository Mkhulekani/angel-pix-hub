import { Film } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MovieCard } from "@/components/MovieCard";
import { Movie } from "@/lib/mockAPI";

interface GenrePageProps {
  selectedGenre: string;
  genreMovies: Movie[];
  onNavigate: (page: string) => void;
  onWatchMovie: (movie: Movie) => void;
}

export const GenrePage = ({ 
  selectedGenre, 
  genreMovies, 
  onNavigate, 
  onWatchMovie 
}: GenrePageProps) => {
  return (
    <div className="min-h-screen px-4 py-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
          <div>
            <h1 className="section-title text-foreground mb-2 flex items-center gap-3 capitalize">
              <Film className="w-8 h-8 text-primary" />
              {selectedGenre} Movies
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover the best {selectedGenre} movies in our collection
            </p>
          </div>
          <Button
            onClick={() => onNavigate('home')}
            variant="outline"
            size="lg"
          >
            Back to Home
          </Button>
        </div>
       
        {genreMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {genreMovies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onWatch={onWatchMovie}
              />
            ))}
          </div>
        ) : (
          <div className="glass rounded-2xl p-12 text-center shadow-elegant">
            <div className="text-6xl mb-6 text-muted-foreground">🎭</div>
            <h3 className="feature-title text-foreground mb-4">No Movies Found</h3>
            <p className="text-muted-foreground text-lg mb-6">
              We're still building our {selectedGenre} collection. Check back soon for new additions!
            </p>
            <Button
              onClick={() => onNavigate('home')}
              variant="default"
              size="lg"
            >
              Explore Other Genres
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};