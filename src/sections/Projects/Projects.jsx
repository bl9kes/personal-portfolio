import styles from './ProjectsStyles.module.css'; // Import local styles for the Projects section
import ProjectCard from '../../common/ProjectCard'; // Reusable component for displaying individual projects

// Import project images
import asm from '../../assets/asm.png';
import sql from '../../assets/sql.png';
import puck from '../../assets/puck.png';
import weather from "../../assets/weather.png";
import figma from "../../assets/figma.png";
import astro from "../../assets/astronaut.png";
import movie from "../../assets/blake_stewart_image.jpg";
import atom from "../../assets/atom.png";

function Projects() {
    return (
        <section id='projects' className={styles.container}> {/* Section with ID for navigation and scoped styling */}
            <h1 className='sectionTitle'> {/* Section title */}
                Projects
            </h1>

            <div className={styles.projectsContainer}> {/* Container for all project cards */}

                {/* Each ProjectCard displays an image, title, link, and description */}
                <ProjectCard
                    src={sql}
                    link='https://github.com/bl9kes/CSC370-A4'
                    h3='Database Application'
                    p='CSC 370 Final Project'
                />
                <ProjectCard
                    src={atom}
                    link='https://github.com/bl9kes/personal-portfolio'
                    h3='ePortfolio'
                    p='Website Code'
                />
                <ProjectCard
                    src={astro}
                    link='https://github.com/bl9kes/CSC305-A1'
                    h3='Astronaut Animation'
                    p='CSC 305 Assignment 1'
                />
                <ProjectCard
                    src={weather}
                    link='https://github.com/bl9kes/weather-app'
                    h3='Weather Dashboard'
                    p='OpenWeatherMap API'
                />
                <ProjectCard
                    src={asm}
                    link='https://github.com/bl9kes/CSC230-A3'
                    h3='Arduino Light Show'
                    p='CSC 230 Assignment 4'
                />
                <ProjectCard
                    src={movie}
                    link='https://github.com/bl9kes/CSC305-A2'
                    h3='WebGL Scene'
                    p='CSC 305 Assignment 2'
                />
                <ProjectCard
                    src={figma}
                    link='https://www.youtube.com/watch?v=XGbAUpoZYgc&t=11s'
                    h3='Figma Prototype'
                    p='SENG 310 Assignment'
                />
                <ProjectCard
                    src={puck}
                    link='https://github.com/bl9kes'
                    h3='NHL Stats'
                    p='Player Stats WebScrapper'
                />

            </div>
        </section>
    );
}

export default Projects; // Export the component so it can be used in App.jsx

// Projects section of the site, showing a list of past work using a reusable ProjectCard component