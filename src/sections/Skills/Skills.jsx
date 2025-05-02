import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import {useTheme} from '../../common/ThemeContext';


function Skills() {
    const { theme, toggleTheme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
<section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="WordPress" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="C  " />
            <SkillList src={checkMarkIcon} skill="SQL" />
        </div>
        <hr />
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
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="VS Code" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Adobe Premier Pro" />
            <SkillList src={checkMarkIcon} skill="iMovie" />
        </div>
    </section>
  );
}

export default Skills