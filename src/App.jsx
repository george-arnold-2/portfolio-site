import { useState } from 'react';
import selfPhoto from './assets/george-arnold-image.jpeg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <img src={selfPhoto} className="logo" alt="self image" />
            </div>
            <h1>George Arnold</h1>
            <h2>Front-End Software Developer</h2>
            <div className="card">
                <a
                    className="button"
                    title="Git Hub"
                    href="https://github.com/george-arnold-2"
                >
                    Git Hub
                </a>
                <a
                    className="button"
                    title="Linked In"
                    href="https://www.linkedin.com/in/george-arnold-4382a9120/"
                >
                    Linked In
                </a>
                <a
                    className="button"
                    title="Email Me"
                    href="mailto:george.arnold.88@gmail.com"
                >
                    Email Me
                </a>
            </div>
        </>
    );
}

export default App;
