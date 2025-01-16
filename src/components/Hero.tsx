import "./hero.scss";

export default function Hero({ opacity }: { opacity: number }) {
    return (
        <div style={{ opacity: opacity }}>
            <div className="hero" id="hero">
                <div className="flex flex-col gap-5 w-fit">
                    <h1 className="title text-balance">
                        Hi, my name is <span className="name">Aaron</span>.
                    </h1>
                    <h1 className="title-body">
                        I am a <em>Junior Web Developer</em>.
                    </h1>
                </div>
            </div>
            <div className="w-full bottom-20 left-0 fixed">
                {/* <a className="hero-arrow" href="#about"> */}
                <svg
                    className="down-arrow"
                    fill="rgba(255, 255, 255, 0.75)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                >
                    <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    />
                </svg>
                {/* </a> */}
            </div>
            <div className="h-[100vh]"></div>
        </div>
    );
}
