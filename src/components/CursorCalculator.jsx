import CalculatorImage from '../assets/calculator.png';
import { useRef } from 'react';
import './CursorCalculator.css';

export default function CursorCalculator() {
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
        <div className="info-card calculator-card">
            <h2>Project Title: Cursor Calculator</h2>
            <p className="no-animation">
                A modern, responsive calculator built with TypeScript and React.
                This project was built using Cursor AI, and it demonstrates
                advanced TypeScript usage, React hooks, and automated deployment
                to GitHub Pages with CI/CD integration. Features include basic
                arithmetic operations, keyboard support, and a clean, accessible
                user interface.
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
                    <li>
                        React.js with TypeScript (type-safe component
                        development)
                    </li>
                    <li>
                        TypeScript (interfaces, types, generics, strict type
                        checking)
                    </li>
                    <li>
                        Vite (fast TypeScript build tooling and hot module
                        replacement)
                    </li>
                    <li>
                        CSS (CSS Grid, Flexbox, CSS custom properties,
                        responsive design)
                    </li>
                    <li>
                        React Hooks (useState, useEffect, useCallback, useMemo)
                    </li>
                    <li>
                        TypeScript configuration (tsconfig.json, strict mode,
                        path mapping)
                    </li>
                    <li>Event handling with TypeScript type safety</li>
                    <li>Component composition and prop typing</li>
                    <li>
                        Accessibility (ARIA labels, keyboard navigation,
                        semantic HTML)
                    </li>
                    <li>Error boundaries and error handling in TypeScript</li>
                </ul>

                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleVisibility(devopsRef)}
                >
                    DevOps & Tooling
                </h3>
                <ul ref={devopsRef} style={{ display: 'none' }}>
                    <li>
                        Git and GitHub (repository management, feature branches,
                        pull requests)
                    </li>
                    <li>GitHub Actions for CI/CD pipeline setup</li>
                    <li>Automated deployment to GitHub Pages</li>
                    <li>TypeScript compilation and build optimization</li>
                    <li>ESLint and Prettier configuration for code quality</li>
                    <li>GitHub Pages configuration and custom domain setup</li>
                    <li>
                        Automated testing integration (Jest, React Testing
                        Library)
                    </li>
                    <li>Build artifact management and deployment strategies</li>
                </ul>

                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleVisibility(otherRef)}
                >
                    Other
                </h3>
                <ul ref={otherRef} style={{ display: 'none' }}>
                    <li>
                        Mathematical computation algorithms and edge case
                        handling
                    </li>
                    <li>User experience design for calculator interfaces</li>
                    <li>Keyboard event handling and accessibility features</li>
                    <li>TypeScript best practices and code organization</li>
                    <li>
                        Performance optimization with React.memo and useMemo
                    </li>
                    <li>Cross-browser compatibility testing</li>
                    <li>Documentation with TypeScript JSDoc comments</li>
                </ul>
            </div>

            <img
                className="project-image"
                alt="Cursor Calculator application"
                src={CalculatorImage}
            />
            <a
                className="button"
                href="https://github.com/george-arnold-2/calculator-cursor"
                target="_blank"
                rel="noopener noreferrer"
            >
                Repository
            </a>
            <a
                className="button"
                href="https://george-arnold-2.github.io/calculator-cursor/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Live Demo
            </a>
        </div>
    );
}
