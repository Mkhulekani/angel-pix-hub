import { Star, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/mockAPI";

interface MovieCardProps {
  movie: Movie;
  showWatchButton?: boolean;
  onWatch?: (movie: Movie) => void;
}

export const MovieCard = ({ movie, showWatchButton = true, onWatch }: MovieCardProps) => {
  return (
    <div className="glass glass-hover rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-elegant">
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-yellow-400 font-bold text-sm">{movie.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-foreground font-bold text-xl mb-2">{movie.title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{movie.year} • {movie.genre.toUpperCase()}</p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{movie.description}</p>
        {showWatchButton && onWatch && (
          <Button
            variant="secondary"
            onClick={() => onWatch(movie)}
            className="w-full"
            size="lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Trailer
          </Button>
        )}
      </div>
    </div>
  );
};