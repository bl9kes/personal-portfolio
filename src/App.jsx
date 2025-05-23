import './App.css'; // Global styles for the entire app
import Contact from './sections/Contact/Contact'; // Contact section component
import Footer from './sections/Footer/Footer';   // Footer section component
import Hero from './sections/Hero/Hero';         // Hero (intro/banner) section
import Projects from './sections/Projects/Projects'; // Projects showcase section
import Skills from './sections/Skills/Skills';   // Skills or tech stack section

function App() {
  return (
    <> 
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App; // Makes App component available to use in other files

// App.jsx is the heart of the page and decides what shows up and the order.
