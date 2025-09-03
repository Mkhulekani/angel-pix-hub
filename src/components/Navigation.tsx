import { Button } from "@/components/ui/button";

interface NavigationProps {
  user: any;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export const Navigation = ({ user, onNavigate, onLogout }: NavigationProps) => {
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-40 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-foreground font-bold text-xl cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          GUARDIAN ANGEL STUDIOS
        </div>
        
        {user && (
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => onNavigate('dashboard')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Dashboard
            </Button>
            <Button
              variant="destructive"
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};