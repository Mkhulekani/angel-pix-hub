# Guardian Angel Studios
*WE LEAVE AN UNFORGETTABLE MARK*

A modern, responsive movie streaming website built with React and Tailwind CSS. Features a sleek dark theme with glassmorphism effects and smooth animations.

## 🎬 Features

### Core Functionality
- **Movie Search**: Search through a curated database of popular movies
- **Genre Browsing**: Browse movies by categories (Action, Sci-Fi, Horror, Drama, Romantic)
- **User Authentication**: Sign up and login system with persistent sessions
- **Watch History**: Track previously watched movies for logged-in users
- **Trailer Viewing**: Watch movie trailers directly in the app via YouTube integration
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Modern UI**: Glassmorphism design with gradient backgrounds
- **Smooth Animations**: Hover effects and transitions throughout the interface
- **Professional Branding**: Clean, modern design representing IT services and solutions
- **Intuitive Navigation**: Easy-to-use interface with clear call-to-actions

## 🚀 Technologies Used

- **React 18+**: Modern functional components with hooks
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons
- **JavaScript ES6+**: Modern JavaScript features
- **YouTube API**: Embedded trailers
- **TMDB Images**: High-quality movie posters

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager
- Modern web browser with ES6 support

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/guardian-angel-studios.git
   cd guardian-angel-studios
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react lucide-react
   # or
   yarn add react lucide-react
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📁 Project Structure

```
guardian-angel-studios/
│
├── src/
│   ├── components/
│   │   └── MovieSearchWebsite.js    # Main component
│   ├── App.js                       # Root component
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles
│
├── public/
│   ├── index.html                   # HTML template
│   └── favicon.ico                  # Website icon
│
├── package.json                     # Dependencies and scripts
└── README.md                        # Project documentation
```

## 🎯 Key Components

### HomePage
- Landing page with hero section
- Search functionality
- Genre categories
- Feature showcase
- Sign-up call-to-action

### Authentication
- **LoginPage**: User login form
- **SignupPage**: User registration form
- Mock authentication system

### User Dashboard
- Personalized welcome message
- Watch history display
- New movies recommendations
- Easy navigation

### Movie Features
- **MovieCard**: Reusable movie display component
- **TrailerModal**: YouTube trailer integration
- **Search Results**: Filtered movie display
- **Genre Pages**: Category-specific movie listings

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Dynamic color transitions
- **Glassmorphism**: Frosted glass effect on cards and modals
- **Hover Animations**: Scale and color transitions
- **Professional Typography**: Clean, readable fonts

### Color Scheme
- **Primary**: Teal to Orange gradients
- **Secondary**: Dark grays and blacks
- **Accents**: Orange, red, and yellow highlights
- **Text**: White and light gray for contrast

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full feature set with grid layouts
- **Tablet**: Adapted grid layouts and touch-friendly buttons
- **Mobile**: Single-column layouts with optimized navigation

## 🔧 Customization

### Adding New Movies
Update the `mockAPI.movies` array in the main component:

```javascript
{
  id: 13,
  title: "Your Movie Title",
  genre: "action", // action, sci-fi, horror, drama, romantic
  year: 2024,
  rating: 8.0,
  poster: "https://image.tmdb.org/t/p/w500/poster-url.jpg",
  trailer: "youtube-video-id",
  description: "Movie description..."
}
```

### Adding New Genres
Update the `genres` array:

```javascript
{ name: 'Comedy', key: 'comedy' }
```

### Styling Modifications
The project uses Tailwind CSS. Key classes used:
- `bg-gradient-to-br from-gray-900 via-black to-teal-900` - Main background
- `bg-white/10 backdrop-blur-sm` - Glassmorphism effect
- `hover:scale-105` - Hover animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Popular Platforms

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm run build
# Upload the build folder to Netlify
```

**GitHub Pages**
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d build"
npm run deploy
```

## 🔒 Security Notes

- This is a demo application with mock authentication
- For production use, implement proper:
  - Backend API integration
  - Secure authentication (JWT, OAuth)
  - Input validation and sanitization
  - HTTPS encryption

## 🎭 Mock Data

The application currently uses mock data for:
- Movie database (12 popular movies included)
- User authentication
- Watch history
- Search functionality

For production, replace mock functions with real API calls.

## 🛡️ Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Guardian Angel Studios**
- Website: [Your Website URL]
- Email: [Your Email]
- GitHub: [Your GitHub Profile]

## 🎯 Future Enhancements

- [ ] Real-time movie database integration
- [ ] User reviews and ratings
- [ ] Watchlist functionality
- [ ] Social sharing features
- [ ] Advanced search filters
- [ ] Movie recommendations AI
- [ ] Offline viewing capability
- [ ] Multi-language support
- [ ] Admin panel for content management
- [ ] Payment integration for premium features

---

*Built with ❤️ by Guardian Angel Studios - IT Services and Solutions*
