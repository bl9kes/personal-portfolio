function SkillList({ src, skill }) { // Receives icon source and skill name as props
  return (
    <span> {/* Container for each skill item */}
      <img src={src} alt="Checkmark icon" /> {/* Displays the checkmark icon */}
      <p>{skill}</p> {/* Displays the name of the skill */}
    </span>
  );
}

export default SkillList; // Export the component so it can be reused in the Skills section
