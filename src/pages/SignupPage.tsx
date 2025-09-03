import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignupPageProps {
  onSignup: (name: string, email: string, password: string) => void;
  onNavigate: (page: string) => void;
}

export const SignupPage = ({ onSignup, onNavigate }: SignupPageProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="glass rounded-2xl p-8 w-full max-w-md shadow-elegant">
        <div className="text-center mb-8">
          <h2 className="section-title text-foreground mb-2">Join Guardian Angel</h2>
          <p className="text-muted-foreground">Create your account to start streaming</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="glass text-foreground placeholder:text-muted-foreground h-12"
              required
            />
          </div>
          
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
            variant="default"
            size="lg"
            className="w-full"
          >
            Create Account
          </Button>
          
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm">Already have an account?</p>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onNavigate('login')}
            >
              Sign In
            </Button>
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