import styles from './ContactStyles.module.css';  // Import CSS module for styling

function Contact() {
  return (
    <section id="contact" className={styles.container}> {/* applies a CSS class called container from a CSS module */}
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/mdkgglzl" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden> {/* Name input */}
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                />
            </div>
            <div className="formGroup"> {/* Email input */}
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="formGroup"> {/* Message textarea */}
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required>
                </textarea>
            </div>
            <input className='hover btn' type='submit' value="Submit"/>
        </form>
        
    </section>
  )
}

export default Contact // Makes the component usable in other files

// This component creates a contact section with a styled form that lets users send a message using Formspree.