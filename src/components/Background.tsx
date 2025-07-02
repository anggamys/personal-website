// Background.jsx
function Background() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                {/* Section title, left-aligned, fix width */}
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-blue-600 tracking-widest text-lg sm:text-xl select-none text-left">
                        BACKGROUND
                    </h2>
                </div>
                {/* Section content, right-aligned */}
                <div className="sm:w-4/5 w-full space-y-6 text-gray-800">
                    <p>
                        I’m currently an undergraduate student at <span className="font-semibold">Universitas Pembangunan Nasional "Veteran" Jawa Timur</span>, where I serve as the lead of the unmanned vessel research team in the <span className="font-semibold">Komunitas Robotika dan Sistem Cerdas</span>.
                    </p>
                    <p>
                        My main interests are in <span className="font-semibold">robotics, computer vision, and machine learning</span>. I enjoy building intelligent systems that can perceive and interact with the world, and I thrive on projects that combine hands-on engineering with real-world impact.
                    </p>
                    <p>
                        <span className="font-bold">When I’m not working on code or research</span>, you’ll find me tinkering with robots or enjoying a great cup of coffee.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Background;
