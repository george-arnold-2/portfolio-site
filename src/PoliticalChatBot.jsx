import PAA from './assets/PAA.png';
import { useRef } from 'react';
import './PoliticalChatBot.css';

export default function PoliticalChatBot() {
    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const devopsRef = useRef(null);
    const otherRef = useRef(null);

    function toggleVisibility(activeRef) {
        // Create an array of all refs
        const allRefs = [frontendRef, backendRef, devopsRef, otherRef];

        allRefs.forEach((ref) => {
            if (ref.current) {
                // Hide all refs except the one clicked
                if (ref === activeRef) {
                    // Toggle display for the active one
                    ref.current.style.display =
                        ref.current.style.display === 'none' ? 'block' : 'none';
                } else {
                    // Always hide the others
                    ref.current.style.display = 'none';
                }
            }
        });
    }
    return (
        <div className="info-card">
            <h2>Project Title: Political Chatbot</h2>
            <p className="no-animation">
                Conceptual project, Analyze tool does not work on free OpenAI.
                My ambition is to update this with a free version of AI
                eventually, but the overall build still showcases abilities and
                skills such as React.js, Vite, Express.js, and Node.js.
            </p>

            <div className="skills-section">
                <h2>Skills Used in This Project</h2>

                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleVisibility(frontendRef)}
                >
                    Frontend
                </h3>
                <ul ref={frontendRef} style={{ display: 'none' }}>
                    <li>React.js (functional components, hooks, JSX)</li>
                    <li>Vite (fast React build tooling and bundling)</li>
                    <li>
                        CSS (flexbox, animations, responsive design, CSS
                        variables)
                    </li>
                    <li>
                        State management with React hooks (<code>useState</code>
                        , <code>useEffect</code>)
                    </li>
                    <li>
                        Environment variables management (
                        <code>.env.production</code>)
                    </li>
                    <li>Client-side API consumption and error handling</li>
                    <li>Conditional rendering in React</li>
                    <li>
                        Accessibility considerations (semantic HTML, ARIA where
                        applicable)
                    </li>
                </ul>

                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleVisibility(backendRef)}
                >
                    Backend
                </h3>
                <ul ref={backendRef} style={{ display: 'none' }}>
                    <li>Node.js with Express.js for REST API development</li>
                    <li>Handling asynchronous requests (async/await)</li>
                    <li>
                        Server-side error handling and rate limit management
                    </li>
                    <li>
                        Environment variables and configuration for different
                        environments
                    </li>
                    <li>Deployment to cloud platforms (Render.com)</li>
                    <li>API proxy and CORS handling</li>
                </ul>

                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleVisibility(devopsRef)}
                >
                    DevOps & Tooling
                </h3>
                <ul ref={devopsRef} style={{ display: 'none' }}>
                    <li>
                        Git and GitHub (repository management, branches, pull
                        requests)
                    </li>
                    <li>
                        Continuous deployment setup with Render connected to
                        GitHub
                    </li>
                    <li>
                        Debugging and logging in local and production
                        environments
                    </li>
                    <li>
                        Version control of environment variables and secrets
                        management
                    </li>
                    <li>
                        Using Postman or similar tools for API testing (implied)
                    </li>
                </ul>

                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleVisibility(otherRef)}
                >
                    Other
                </h3>
                <ul ref={otherRef} style={{ display: 'none' }}>
                    <li>Integrating with third-party APIs (OpenAI API)</li>
                    <li>Rate limit and quota handling with third-party APIs</li>
                    <li>
                        User experience considerations with loading/error states
                    </li>
                    <li>Writing clean, modular, and maintainable code</li>
                    <li>
                        Writing meaningful commit messages and project
                        documentation
                    </li>
                </ul>
            </div>

            <img
                className="project-image"
                alt="alternative display"
                src={PAA}
            />
            <a
                className="button"
                href="https://github.com/george-arnold-2/political-chatbot"
                target="_blank"
                rel="noopener noreferrer"
            >
                Front End Repo
            </a>
            <a
                className="button"
                href="https://github.com/george-arnold-2/political-chatbot-backend"
                target="_blank"
                rel="noopener noreferrer"
            >
                Back End Repo
            </a>
            <a
                className="button"
                href="https://george-arnold-2.github.io/political-chatbot/"
                target="_blank"
                rel="noopener noreferrer"
            >
                View the Page
            </a>
        </div>
    );
}
