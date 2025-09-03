import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { genres } from "@/lib/mockAPI";

interface HomePageProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
  onGenreClick: (genreKey: string) => void;
  onNavigate: (page: string) => void;
  user: any;
}

export const HomePage = ({ 
  searchQuery, 
  setSearchQuery, 
  onSearch, 
  onGenreClick, 
  onNavigate, 
  user 
}: HomePageProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Movie background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=800&fit=crop')"
        }}
      />
     
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-cinema" />
     
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        {/* Logo and branding */}
        <div className="mb-16 text-center animate-float">
          <h1 className="hero-title text-foreground mb-6 animate-glow">
            GUARDIAN ANGEL STUDIOS
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-3 text-gradient-primary">
            WE LEAVE AN UNFORGETTABLE MARK
          </p>
          <p className="text-lg md:text-xl text-secondary text-gradient-secondary">
            IT SERVICES AND SOLUTIONS
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl mb-12">
          <div className="glass rounded-full p-4 shadow-elegant">
            <div className="flex gap-4">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for movies, TV shows, actors..."
                className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground text-lg h-12 focus-visible:ring-0"
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
              />
              <Button
                onClick={onSearch}
                variant="secondary"
                size="lg"
                className="px-8"
              >
                <Search className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Auth Button - Only Sign Up */}
        {!user && (
          <div className="mb-16">
            <Button
              onClick={() => onNavigate('signup')}
              variant="hero"
              size="hero"
            >
              Get Started - Sign Up Free
            </Button>
          </div>
        )}

        {/* Features Section */}
        <div className="w-full max-w-7xl">
          <h2 className="section-title text-foreground text-center mb-12">
            Explore by Genre
          </h2>
         
          {/* Genre Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {genres.map((genre) => (
              <Button
                key={genre.key}
                onClick={() => onGenreClick(genre.key)}
                variant="cinema"
                className="h-20 flex-col gap-2"
              >
                <div className="text-3xl">🎬</div>
                <span className="font-semibold">{genre.name}</span>
              </Button>
            ))}
          </div>

          {/* Professional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass glass-hover rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-5xl mb-6 text-primary">🎭</div>
              <h3 className="feature-title text-foreground mb-4">Premium Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access thousands of movies and TV shows in HD quality with instant streaming.
              </p>
            </div>
           
            <div className="glass glass-hover rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-5xl mb-6 text-primary">📱</div>
              <h3 className="feature-title text-foreground mb-4">Multi-Device</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch on any device - smartphone, tablet, laptop, or smart TV.
              </p>
            </div>
           
            <div className="glass glass-hover rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-5xl mb-6 text-primary">⚡</div>
              <h3 className="feature-title text-foreground mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ultra-fast loading with advanced streaming technology and global CDN.
              </p>
            </div>
           
            <div className="glass glass-hover rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-5xl mb-6 text-primary">🎯</div>
              <h3 className="feature-title text-foreground mb-4">Smart Recommendations</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered suggestions based on your viewing history and preferences.
              </p>
            </div>
           
            <div className="glass glass-hover rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-5xl mb-6 text-primary">🔒</div>
              <h3 className="feature-title text-foreground mb-4">Secure & Private</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data is protected with enterprise-grade security and privacy controls.
              </p>
            </div>
           
            <div className="glass glass-hover rounded-2xl p-8 text-center shadow-elegant">
              <div className="text-5xl mb-6 text-primary">🌟</div>
              <h3 className="feature-title text-foreground mb-4">Premium Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ad-free viewing, offline downloads, and exclusive early access to new releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};