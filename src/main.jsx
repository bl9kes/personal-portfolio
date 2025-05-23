import React from 'react'; // React core library
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering the app
import { StrictMode } from 'react'; // Helps catch common problems during development
import { createRoot } from 'react-dom/client'; // New React 18 rendering method
import './index.css'; // Global styles
import App from './App.jsx'; // Main app component
import { ThemeProvider } from './common/ThemeContext.jsx'; // Context for light/dark theme

// Render the React application to the <div id="root"> in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider> {/* to manage themes (like dark mode) -  lets your whole site know whether it’s in light or dark mode */} 
      
      <App /> {/* main component that holds the rest of the site */}
    </ThemeProvider>
  </React.StrictMode>,
);
