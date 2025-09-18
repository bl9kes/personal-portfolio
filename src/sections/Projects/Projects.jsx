import styles from './ProjectsStyles.module.css'; // Import local styles for the Projects section
import ProjectCard from '../../common/ProjectCard'; // Reusable component for displaying individual projects

// Import project images
import asm from '../../assets/asm.png';
import sql from '../../assets/sql.png';
import puck from '../../assets/puck.png';
import weather from "../../assets/weather.png";

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
                    h3='Database-Driven App'
                    p='CSC 370 Coursework'
                />
                <ProjectCard
                    src={puck}
                    link='https://github.com/bl9kes'
                    h3='NHL Stats'
                    p='PLayer Stats WebScrapper'
                />
                <ProjectCard
                    src={weather}
                    link='https://github.com/bl9kes/weather-app'
                    h3='Weather Dashboard'
                    p='Integrated with OpenWeatherMap API'
                />
                <ProjectCard
                    src={asm}
                    link='https://github.com/bl9kes/CSC230-A1'
                    h3='Assembly A1'
                    p='CSC 230 Coursework'
                />
                <ProjectCard
                    src={asm}
                    link='https://github.com/bl9kes/CSC230-A2'
                    h3='Assembly A2'
                    p='CSC 230 Coursework'
                />
                <ProjectCard
                    src={asm}
                    link='https://github.com/bl9kes/CSC230-A3'
                    h3='Assembly A3'
                    p='CSC 230 Coursework'
                />
            </div>
        </section>
    );
}

export default Projects; // Export the component so it can be used in App.jsx

// Projects section of the site, showing a list of past work using a reusable ProjectCard component