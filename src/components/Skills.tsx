import "./skills.scss";
export default function Skills() {
    return (
        <article>
            <h4 className="section-title" id="skills">
                My Skills
            </h4>
            <p>
                <span className="highlight">Technologies</span> that I have been
                using lately
            </p>
            <section className="skills-list">
                <div>
                    <img src="html.png" alt="HTML" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src="css-icon.png" alt="CSS" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src="js-icon.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src="php-icon.png" alt="PHP" />
                    <p>PHP</p>
                </div>
                <div>
                    <img src="wordpress-icon.png" alt="WordPress" />
                    <p>WordPress</p>
                </div>
                <div>
                    <img src="woocommerce-icon.png" alt="WooCommerce" />
                    <p>WooCommerce</p>
                </div>
                <div>
                    <img src="elementor-icon.png" alt="Elementor" />
                    <p>Elementor</p>
                </div>
                <div>
                    <img src="laravel-icon.png" alt="Laravel" />
                    <p>Laravel</p>
                </div>
                <div>
                    <img src="livewire.png" alt="Livewire" />
                    <p>Livewire</p>
                </div>
                <div>
                    <img src="tailwind.png" alt="Tailwind" />
                    <p>Tailwind</p>
                </div>
                <div>
                    <img src="react.png" alt="React" />
                    <p>React</p>
                </div>
                <div>
                    <img src="mysql.png" alt="MySQL" />
                    <p>MySQL</p>
                </div>
            </section>
        </article>
    );
}
