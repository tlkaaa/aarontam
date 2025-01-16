import "./contact.scss";
export default function Contact() {
    return (
        <article className="contact">
            <h4 className="contact-title">Get In Touch</h4>
            <p className="text-2xl">
                <span className="highlight">Drop</span> me an email to have a
                chat with me!
            </p>
            <div className="contact-details">
                <div>
                    <img src="/aarontam/email.PNG" width={27} alt="Email" />{" "}
                    <p>aarontam9529@gmail.com</p>
                </div>
                <div>
                    <img
                        src="/aarontam\assets\linkedin.PNG"
                        width={27}
                        alt="Linkedin"
                    />
                    <p>
                        <a
                            href="https://www.linkedin.com/in/aarontamlk"
                            target="_blank"
                        >
                            www.linkedin.com/in/aarontamlk ↗
                        </a>
                    </p>
                </div>
                <div>
                    <img
                        src="/aarontam\assets\github.PNG"
                        width={27}
                        alt="GitHub"
                    />
                    <p>
                        <a href="https://www.github.com/tlkaaa" target="_blank">
                            github.com/tlkaaa ↗
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}
