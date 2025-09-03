import { Clock, Film } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MovieCard } from "@/components/MovieCard";
import { Movie, User, mockAPI } from "@/lib/mockAPI";

interface DashboardPageProps {
  user: User;
  watchHistory: Movie[];
  onNavigate: (page: string) => void;
  onWatchMovie: (movie: Movie) => void;
}

export const DashboardPage = ({ user, watchHistory, onNavigate, onWatchMovie }: DashboardPageProps) => {
  return (
    <div className="min-h-screen px-4 py-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
          <div>
            <h1 className="section-title text-foreground mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-muted-foreground text-lg">
              Continue watching or discover something new
            </p>
          </div>
          <Button
            onClick={() => onNavigate('home')}
            variant="outline"
            size="lg"
          >
            Explore More
          </Button>
        </div>

        {/* Watch History Section */}
        <section className="mb-16">
          <h2 className="section-title text-foreground mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary" />
            Continue Watching
          </h2>
          {watchHistory.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {watchHistory.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  onWatch={onWatchMovie}
                />
              ))}
            </div>
          ) : (
            <div className="glass rounded-2xl p-12 text-center shadow-elegant">
              <div className="text-6xl mb-4 text-muted-foreground">🎬</div>
              <p className="text-muted-foreground text-lg">
                No movies in your watch history yet. Start exploring!
              </p>
              <Button
                onClick={() => onNavigate('home')}
                variant="default"
                size="lg"
                className="mt-6"
              >
                Discover Movies
              </Button>
            </div>
          )}
        </section>

        {/* Trending Movies Section */}
        <section>
          <h2 className="section-title text-foreground mb-8 flex items-center gap-3">
            <Film className="w-8 h-8 text-secondary" />
            Trending Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockAPI.movies.slice(0, 8).map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onWatch={onWatchMovie}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};