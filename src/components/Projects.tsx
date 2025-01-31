import "./projects.scss";
import Card from "./Card";

export default function Project() {
    return (
        <article>
            <h4 className="section-title" id="project">
                My Projects
            </h4>
            <p className="text-lg">
                <span className="highlight">Websites</span> I contributed in
                development at{" "}
                <a
                    href="https://strong.digital/"
                    target="_blank"
                    className="text-cyan-600 hover:text-pink-400"
                >
                    Strong Digital ↗
                </a>
            </p>
            {/* List of projects from Strong */}
            <div className="project-list">
                {/* ATG */}
                <div className="projects">
                    <div className="details">
                        <h5>
                            <a
                                href="https://www.australiathegift.com.au/"
                                target="_blank"
                            >
                                Australia The Gift
                            </a>
                        </h5>
                        <Card text="A redesigned and updated website for Australia the Gift, featuring a modern, user-friendly interface for improved navigation and enhanced user experience. My primary contribution was developing front-end components and integrating data from the back end." />
                        <p className="techs">
                            WordPress WooCoomerce Tailwind PHP
                        </p>
                        <p>
                            <a
                                href="https://www.australiathegift.com.au/"
                                target="_blank"
                                className="absolute bottom-2 lg:bottom-0 text-cyan-600 hover:text-yellow-200"
                            >
                                See Live Website ↗
                            </a>
                        </p>
                    </div>
                    <div
                        className="bg-image"
                        style={{ backgroundImage: "url('atg.png')" }}
                    ></div>
                </div>
                {/* Dreamfarm */}
                <div className="projects">
                    <div className="details">
                        <h5>
                            <a href="https://dreamfarm.com/" target="_blank">
                                DreamFarm
                            </a>
                        </h5>
                        <Card text="An Ecommerce website designs for DreamFarm - creating innovative, problem-solving products with precision and purpose, all created in-house. My main contribution was to incorporate wooCommerce into the site, making small visual updates and bug fixes." />
                        <p className="techs">
                            WordPress WooCoomerce Tailwind PHP
                        </p>
                        <p>
                            <a
                                href="https://dreamfarm.com/"
                                target="_blank"
                                className="absolute bottom-2 lg:bottom-0 text-cyan-600 hover:text-yellow-200"
                            >
                                See Live Website ↗
                            </a>
                        </p>
                    </div>
                    <div
                        className="bg-image"
                        style={{ backgroundImage: "url('dfa.png')" }}
                    ></div>
                </div>
                {/* uPaid */}
                <div className="projects">
                    <div className="details">
                        <h5>
                            <a href="https://upaid.com.au/" target="_blank">
                                uPaid
                            </a>
                        </h5>
                        <Card text="A web application that enables contractors to get paid instantly for completed work by acting as their invoicing agent. My role was to develop the user interface and implement functionalities for contractors to submit invoices and update the database seamlessly." />
                        <p className="techs">
                            Laravel Livewire Tailwind PHP JavaScript
                        </p>
                        <p>
                            <a
                                href="https://upaid.com.au/"
                                target="_blank"
                                className="absolute bottom-2 lg:bottom-0  text-cyan-600 hover:text-yellow-200"
                            >
                                See Live Website ↗
                            </a>
                        </p>
                    </div>
                    <div
                        className="bg-image"
                        style={{
                            backgroundImage: "url('uPaid.png')",
                        }}
                    ></div>
                </div>
                {/* Maroon Logistics */}
                <div className="projects">
                    <div className="details">
                        <h5>Maroon Logistics</h5>
                        <Card text="A new website for Maroon Logistics, designed to showcase their affordable, reliable, and transparent shipping solutions. My primary role was to develop the majority of the site based on the client’s requirements, making design adjustments to ensure seamless integration of diverse content." />
                        <p className="techs">WordPress Tailwind PHP</p>
                        <p>
                            <a
                                href="https://maroonlgs.com/"
                                className="absolute bottom-2 lg:bottom-0 text-cyan-600 hover:text-yellow-200"
                            >
                                See Live Website ↗
                            </a>
                        </p>
                    </div>
                    <div
                        className="bg-image"
                        style={{ backgroundImage: "url('mlg.png')" }}
                    ></div>
                </div>
                {/* Lone Pine */}
                <div className="projects">
                    <div className="details">
                        <h5>
                            <a
                                href="https://lonepinekoalasanctuary.com/accessibility/"
                                target="_blank"
                            >
                                Lone Pine Accessibility Page
                            </a>
                        </h5>
                        <Card text="An updated Lone Pine Koala Sanctuary accessibility page using the new design theme. I implemented the design and migrated content from the old site." />
                        <p className="techs">
                            WordPress Elementor Tailwind PHP
                        </p>
                        <p>
                            <a
                                href="https://lonepinekoalasanctuary.com/accessibility/"
                                target="_blank"
                                className="absolute bottom-2 lg:bottom-0 text-cyan-600 hover:text-yellow-200"
                            >
                                See Live Website ↗
                            </a>
                        </p>
                    </div>
                    <div
                        className="bg-image"
                        style={{
                            backgroundImage: "url('lone-pine.png')",
                        }}
                    ></div>
                </div>
                {/* Your Space */}
                <div className="projects">
                    <div className="details">
                        <h5>
                            <a
                                href="https://yourspaceoceania.com/containers/"
                                target="_blank"
                            >
                                Your Space Oceania Container Spaces
                            </a>
                        </h5>
                        <Card text="The Container Space page for Your Space Oceania showcases sustainable, repurposed containers as affordable housing and storage solutions, offering both new and pre-owned options. Implemented the design using the living page layout and adjusted to fit the content." />
                        <p className="techs">WordPress Tailwind PHP</p>
                        <p>
                            <a
                                href="https://yourspaceoceania.com/containers/"
                                target="_blank"
                                className="absolute bottom-2 lg:bottom-0 text-cyan-600 hover:text-yellow-200"
                            >
                                See Live Website ↗
                            </a>
                        </p>
                    </div>
                    <div
                        className="bg-image"
                        style={{
                            backgroundImage: "url('your-space.png')",
                        }}
                    ></div>
                </div>
            </div>

            {/* End of Strong websites */}
            <p className="mt-32 mb-10 text-lg">
                <span className="highlight">Projects</span> I made
            </p>
            {/* List of projects I made */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-20 lg:gap-x-32">
                <div className="my-projects">
                    <div className="details">
                        <h5>Advice Slip</h5>
                        <img src="advice_slip.PNG" alt="Advice Slip" />
                        <p>
                            Generate random advice slips or search advice slips
                            with keywords or ID.
                        </p>
                        <p className="techs">React TypeScript Bootstrap</p>
                        <p className="flex justify-start gap-x-10">
                            <a
                                href="https://tlkaaa.github.io/advice-slip/"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                See Advice Slip ↗
                            </a>
                            <a
                                href="https://github.com/tlkaaa/advice-slip"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                GitHub Page ↗
                            </a>
                        </p>
                    </div>
                </div>
                <div className="my-projects">
                    <div className="details">
                        <h5>Fire Evacuation Simulation</h5>
                        <img
                            src="fire_evac.PNG"
                            alt="Fire Evacuation Simulation"
                        />
                        <p>
                            Simulation of a fire evacuation situation in a
                            stadium for event organizers.
                        </p>
                        <p className="techs">Unity C#</p>
                        <p>
                            <a
                                href="https://tlkaaa.itch.io/project"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                See Demo ↗
                            </a>
                        </p>
                    </div>
                </div>
                <div className="my-projects">
                    <div className="details">
                        <h5>Tech</h5>
                        <img src="tech.PNG" alt="Tech" />
                        <p>
                            A made-up Technology Company's website showcasing
                            their range of product.
                        </p>
                        <p className="techs">HTML CSS JavaScript</p>

                        <p className="flex justify-start gap-x-10">
                            <a
                                href="https://tlkaaa.github.io/Tech/"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                See Tech ↗
                            </a>

                            <a
                                href="https://github.com/tlkaaa/tech"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                GitHub Page ↗
                            </a>
                        </p>
                    </div>
                </div>
                <div className="my-projects">
                    <div className="details">
                        <h5>Black-Jack (Phase 1)</h5>
                        <img
                            src="blackjack.PNG
"
                            alt="Black-Jack (Phase 1)"
                        />
                        <p>
                            A classic round-based Black Jack game with up to 5
                            players.
                        </p>
                        <p className="techs">React TypeScript Tailwind</p>
                        <p className="flex justify-start gap-x-10">
                            <a
                                href="https://tlkaaa.github.io/blackjack/"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                See Black Jack ↗
                            </a>

                            <a
                                href="https://github.com/tlkaaa/blackjack"
                                target="_blank"
                                className=" text-cyan-600 hover:text-yellow-200"
                            >
                                GitHub Page ↗
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
