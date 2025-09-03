import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onNavigate: (page: string) => void;
}

export const LoginPage = ({ onLogin, onNavigate }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="glass rounded-2xl p-8 w-full max-w-md shadow-elegant">
        <div className="text-center mb-8">
          <h2 className="section-title text-foreground mb-2">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to continue watching</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="glass text-foreground placeholder:text-muted-foreground h-12"
              required
            />
          </div>
          
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="glass text-foreground placeholder:text-muted-foreground h-12"
              required
            />
          </div>
          
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full"
          >
            Sign In
          </Button>
          
          <div className="text-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onNavigate('home')}
            >
              Back to Home
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};