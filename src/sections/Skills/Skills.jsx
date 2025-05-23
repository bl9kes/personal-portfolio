import styles from './SkillsStyles.module.css'; // Import local styles for the Skills section
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList'; // Reusable component to display a single skill item
import { useTheme } from '../../common/ThemeContext'; // Hook to access current theme (light/dark)

function Skills() {
    const { theme, toggleTheme } = useTheme(); // Get current theme and toggle function from context
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark; // Use the right icon based on theme

    return (
        <section id="skills" className={styles.container}> {/* Skills section with scoped styles */}
            <h1 className='sectionTitle'>Skills</h1>

            {/* Frontend & Web Tools */}
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="WordPress" />
            </div>

            <hr />

            {/* Programming Languages */}
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="C  " />
                <SkillList src={checkMarkIcon} skill="SQL" />
            </div>

            <hr /> 

            {/* CS Concepts / Coursework */}
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Operating Systems" />
                <SkillList src={checkMarkIcon} skill="Data Structures" />
                <SkillList src={checkMarkIcon} skill="Object-Oriented Programming" />
                <SkillList src={checkMarkIcon} skill="Computer Graphics" />
                <SkillList src={checkMarkIcon} skill="Database Systems" />
                <SkillList src={checkMarkIcon} skill="Software Architecture" />
                <SkillList src={checkMarkIcon} skill="UX/UI Design" />
            </div>

            <hr />

            {/* Tools & Creative Software */}
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="VS Code" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Adobe Premier Pro" />
                <SkillList src={checkMarkIcon} skill="iMovie" />
            </div>
        </section>
    );
}

export default Skills; // Export so it can be used in App.jsx
