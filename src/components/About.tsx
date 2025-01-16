import "./about.scss";
export default function About() {
    return (
        <article id="about">
            <h4 className="section-title">About Me</h4>
            <div className="flex gap-4 md:gap-10 flex-col flex-col-reverse md:flex-row">
                <div>
                    <p className="about-text">
                        Hi, first of all I want to say thank you for visiting my
                        portfolio. I'm Aaron Tam, a Junior Web Developer from
                        Brisbane, Australia who is{" "}
                        <span className="highlight">
                            passionate about creating responsive, visually
                            appealing, and functional websites
                        </span>{" "}
                        that deliver great user experiences. Whether it's
                        building custom WordPress sites or writting clean PHP
                        code, I love turning ideas into reality.
                    </p>
                    <p className="about-text">
                        With a strong focus on front-end development,{" "}
                        <span className="highlight">
                            I bring creativity, attention to detail, and a
                            commitment to quality
                        </span>{" "}
                        to every project. Check out Projects to see my work, and
                        feel free to get in touch. I'd love to collaborate on
                        your next project!
                    </p>
                </div>
                <img
                    className="max-w-48 max-h-48 mt-6 md:mt-0"
                    src="personal_pic.png"
                />
            </div>
        </article>
    );
}
