import './OldProjectList.css';

export default function OldProjectList() {
    return (
        <div className="old-project-list info-card">
            <h2>Old Projects</h2>
            <p className="fade">
                This is the work I did before my first position as a
                professional developer, much of the work is highly dated, but
                showcases where I've come from
            </p>
            <ul>
                <li>
                    <a href="https://george-arnold.github.io/my-portfolio/">
                        My Old Portfolio
                    </a>
                    <p>Mostly active in 2019-2020</p>
                </li>
                <li>
                    <a href="https://github.com/george-arnold">My Old Github</a>
                    <p>Mostly active in 2019-2020</p>
                </li>
                <li>
                    <a href="https://github.com/george-arnold/dungeoneer-toolkit-client">
                        Dungeoneer Toolkit
                    </a>
                    <p>Created in 2020 as a Thinkful Learning Project</p>
                </li>
                <li>
                    <a href="https://github.com/george-arnold/simple-budget">
                        Simple Budget
                    </a>
                    <p>Created in 2020 as a Thinkful Learning Project</p>
                </li>
            </ul>
        </div>
    );
}
