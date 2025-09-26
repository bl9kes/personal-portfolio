import styles from './HeroStyles.module.css'; // Import CSS module for styling
import heroImg from '../../assets/hero-img.png'; // Profile image
import sun from '../../assets/sun.svg'; // Light mode icon
import moon from '../../assets/moon.svg'; // Dark mode icon
import blake from '../../assets/blake.jpeg';

// Social icons for light and dark mode
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import youtube from '../../assets/youtube.png';

import CV from '../../assets/MainResume.pdf'; // Resume PDF file
import { useTheme } from '../../common/ThemeContext'; // Custom hook to access theme context

function Hero() {
    const { theme, toggleTheme } = useTheme(); // Get current theme and function to toggle it

    // Choose the correct icon depending on the active theme
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}> {/* Hero section with theme-based styling */}

            {/* Profile image and theme toggle button */}
            <div className={styles.colourModeContainer}>
                <img
                    className={styles.Hero}
                    src={blake}
                    alt="Profile Picture"
                />
                <img
                    className={styles.colourMode}
                    src={themeIcon}
                    alt="Colour Mode Icon"
                    onClick={toggleTheme} // Toggles between light and dark theme
                />
            </div>

            {/* Personal info, social links, and resume */}
            <div className={styles.info}>
                <h1>
                    Blake
                    <br />
                    Stewart
                </h1>
                <h2>Developer</h2>

                {/* Social links */}
                <span>
                    {/* <a href="https://twitter.com/" target='_blank'>
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a> */}
                    <a href="https://github.com/bl9kes/" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.youtube.com/@bl9kes" target="_blank">
                        <img src={youtube} alt="Youtube Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/blakeastewart" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Fourth-year Computer Science student at the University of Victoria
                </p>

                {/* Resume download button */}
                <a href={CV} download>
                    <button className='hover'>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero; // Makes the Hero component available to other parts of the app
