import { useState, useEffect } from 'react';
import data from './assets/data.json';
import './InfoCard.css';

export default function Card() {
    const [count, setCount] = useState(0);
    const [title, updateTitle] = useState('');
    const [copy, updateCopy] = useState('');
    const [fade, setFade] = useState(false);

    useEffect(() => {
        updateTitle(data[0].title);
        updateCopy(data[0].copy);
        setTimeout(() => {
            setFade(true);
        }, 50);
    }, []);
    function handleClick() {
        setFade(false);
        const nextIndex = (count + 1) % data.length;
        setCount(nextIndex);
        updateTitle(data[nextIndex].title);
        updateCopy(data[nextIndex].copy);
        setTimeout(() => {
            setFade(true);
        }, 50);
    }
    return (
        <div className="info-card">
            <h2 className={fade ? 'typing' : 'hidden'}>{data[count].title}</h2>
            <p className={fade ? 'fade' : ''}>{data[count].copy}</p>
            <button onClick={handleClick}>Click for More Info</button>
        </div>
    );
}
