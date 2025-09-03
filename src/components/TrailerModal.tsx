import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/mockAPI";

interface TrailerModalProps {
  isOpen: boolean;
  movie: Movie | null;
  onClose: () => void;
}

export const TrailerModal = ({ isOpen, movie, onClose }: TrailerModalProps) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="glass rounded-lg p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">{movie.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground hover:text-muted-foreground"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            title={movie.title}
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};