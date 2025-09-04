import selfPhoto from './assets/george-arnold-image.jpeg';
import InfoCard from './components/InfoCard';
import PoliticalChatBot from './components/PoliticalChatBot';
import CursorCalculator from './components/CursorCalculator';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OldProjectList from './components/OldProjectList';

function App() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div className="self-info">
                <div>
                    <img src={selfPhoto} className="logo" alt="self image" />
                </div>
                <h1>George Arnold</h1>
                <p>Front-End Software Developer</p>
            </div>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={false}
                showDots={true}
                ssr={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
                removeArrowOnDeviceType={['tablet', 'mobile']}
            >
                <PoliticalChatBot />
                <CursorCalculator />
                <OldProjectList />
            </Carousel>
            <InfoCard />
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
