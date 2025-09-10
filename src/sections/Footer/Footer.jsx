import styles from './FooterStyles.module.css'; // Import CSS module for footer styling

function Footer() {
  return (
    <section id='footer' className={styles.container}> {/* Footer section with custom styles */}
        <p>
          &copy; 2025 Blake Stewart. <br />
          All right reserved.
        </p>
    </section>
  );
}

export default Footer; // Export the component so it can be used in App.jsx

