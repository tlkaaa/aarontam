import "./nav.scss";

export default function Nav() {
    return (
        <nav id="nav">
            <img
                src="personal_pic.png"
                className="size-12 rounded-full cursor-pointer border border-pink-400 hover:border-yellow-200"
                alt="logo"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            />
            <ul className="nav-items">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#project">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
