import { motion } from "framer-motion";

export default function Background() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full py-24 bg-[#e8f1f2] dark:bg-[#202a2d]"
            aria-label="Background"
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-[#16697a] dark:text-[#f7be16] tracking-widest text-lg sm:text-xl select-none text-left border-l-4 border-[#f7be16] pl-4 bg-transparent">BACKGROUND</h2>
                </div>
                <div className="sm:w-4/5 w-full space-y-6 text-[#292929] dark:text-[#e8f1f2]">
                    <p>
                        I am an undergraduate student at <span className="font-semibold text-[#489fb5]">UPN "Veteran" Jawa Timur</span> and currently lead the Unmanned Vessel Research Team in <span className="font-semibold text-[#489fb5]">Komunitas Robotika dan Sistem Cerdas</span>. My expertise is in robotics, computer vision, and developing robust, scalable backend systems. I am passionate about turning innovative ideas into real-world solutions and thrive on challenges that combine hands-on engineering with meaningful impact. <br /><br />
                        Outside of research and development, I enjoy experimenting with new technologies, collaborating with like-minded people, and relaxing with a great cup of coffee.
                    </p>
                    <blockquote className="border-l-4 border-[#489fb5] pl-4 italic text-[#16697a] dark:text-[#f7be16]">
                        “Build tech that matters. Ship fast, iterate faster. Make it reliable, and make it yours.”
                    </blockquote>
                </div>
            </div>
        </motion.section>
    );
}
