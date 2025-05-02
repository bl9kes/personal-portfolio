import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import asm from '../../assets/asm.png';
import sql from '../../assets/sql.png';
import puck from '../../assets/puck.png';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>
            Projects
        </h1>
        <div className={styles.projectsContainer}>
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

export default Projects;