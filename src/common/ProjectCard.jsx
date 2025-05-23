import React from 'react'; // Import React (needed for JSX syntax)

function ProjectCard({ src, link, h3, p }) { // Props: image source, project link, title, and description
  return (
    <a href={link} target='_blank'> {/* Makes the entire card a clickable link that opens in a new tab */}
        <img className='hover' src={src} alt={`${h3} logo`} /> {/* Project image with hover effect */}
        <h3>{h3}</h3> {/* Project title */}
        <p>{p}</p> {/* Project description */}
    </a>
  );
}

export default ProjectCard; // Export the component for use in the Projects section
