function Background() {
    return (
        <section className="w-full py-24 bg-[#e8f1f2]">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                {/* Section title, left-aligned, fix width */}
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-[#16697a] tracking-widest text-lg sm:text-xl select-none text-left border-l-4 border-[#f7be16] pl-4 bg-transparent">
                        BACKGROUND
                    </h2>
                </div>
                {/* Section content, right-aligned */}
                <div className="sm:w-4/5 w-full space-y-6 text-[#292929]">
                    <p>
                        I’m currently an undergraduate student at <span className="font-semibold text-[#489fb5]">Universitas Pembangunan Nasional "Veteran" Jawa Timur</span>, where I serve as the lead of the unmanned vessel research team in the <span className="font-semibold text-[#489fb5]">Komunitas Robotika dan Sistem Cerdas</span>.
                    </p>
                    <p>
                        My main interests are in <span className="font-semibold text-[#16697a]">robotics, computer vision, and machine learning</span>. I enjoy building intelligent systems that can perceive and interact with the world, and I thrive on projects that combine hands-on engineering with real-world impact.
                    </p>
                    <p>
                        <span className="font-bold text-[#f7be16]">When I’m not working on code or research</span>, you’ll find me tinkering with robots or enjoying a great cup of coffee.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Background;
