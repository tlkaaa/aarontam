import "./skills.scss";
export default function Skills() {
    return (
        <article>
            <h4 className="section-title">My Skills</h4>
            <p>
                <span className="highlight">Technologies</span> that I have been
                using lately
            </p>
            <section className="skills-list">
                <div>
                    <img src="public\assets\html.png" alt="HTML" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src="public\assets\css-icon.png" alt="CSS" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src="public\assets\js-icon.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src="public\assets\php-icon.png" alt="PHP" />
                    <p>PHP</p>
                </div>
                <div>
                    <img
                        src="public\assets\wordpress-icon.png"
                        alt="WordPress"
                    />
                    <p>WordPress</p>
                </div>
                <div>
                    <img
                        src="public\assets\woocommerce-icon.png"
                        alt="WooCommerce"
                    />
                    <p>WooCommerce</p>
                </div>
                <div>
                    <img
                        src="public\assets\elementor-icon.png"
                        alt="Elementor"
                    />
                    <p>Elementor</p>
                </div>
                <div>
                    <img src="public\assets\laravel-icon.png" alt="Laravel" />
                    <p>Laravel</p>
                </div>
                <div>
                    <img src="public\assets\Livewire.png" alt="Livewire" />
                    <p>Livewire</p>
                </div>
                <div>
                    <img src="public\assets\tailwind.png" alt="Tailwind" />
                    <p>Tailwind</p>
                </div>
                <div>
                    <img src="public\assets\react.png" alt="React" />
                    <p>React</p>
                </div>
                <div>
                    <img src="public\assets\mysql.png" alt="MySQL" />
                    <p>MySQL</p>
                </div>
            </section>
        </article>
    );
}
