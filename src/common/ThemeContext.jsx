import React, { createContext, useContext, useEffect, useState } from 'react'; // React hooks and context API

const ThemeContext = createContext(); // Create a new context for theme state (light/dark)

// Custom hook to access the theme context from any component
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider wraps your app and provides the theme and toggle function
export const ThemeProvider = ({ children }) => {
    // Initialize theme state using localStorage if available, otherwise default to 'light'
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light' // Lazy initializer
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // Apply the theme to the <body> element for CSS access
        localStorage.setItem('theme', theme);            // Save the theme in localStorage so it persists on reload
    }, [theme]); // Runs every time the `theme` changes

    // Function to toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Flip the theme value
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Provide theme and toggleTheme to all children */}
            {children} {/* Render all child components that need access to the theme */}
        </ThemeContext.Provider>
    );
};
