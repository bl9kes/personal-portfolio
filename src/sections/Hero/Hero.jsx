import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume2025.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
  <section id="hero" className={styles.container}> 
    <div className={styles.colourModeContainer}>
        <img
        className={styles.Hero}
        src={heroImg} 
        alt="Profile Picture" 
        />
        <img 
        className={styles.colourMode}
        src={themeIcon}
        alt="Colour Mode Icon" 
        onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
            Blake
            <br />
            Stewart
        </h1>
        <h2>
            Developer
        </h2>
        <span>
            {/* <a href="https://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="Twitter Icon" />
            </a> */}
            <a href="https://github.com/bl9kes/" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/blakeastewart" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>
            Computer Science student at the University of Victoria
        </p>
        <a href={CV} download>
            <button className='hover'>
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero