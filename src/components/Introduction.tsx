import data from "../constants/data.json";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { Mail, Github, Linkedin, Instagram };

export default function Introduction() {
    const socials = data.socials;

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center px-4 bg-[#e8f1f2] dark:bg-[#202a2d]"
            aria-label="Introduction"
        >
            <div className="w-full max-w-3xl pl-0 sm:pl-12">
                <h1 className="text-4xl font-bold mb-6 text-[#16697a] dark:text-[#f7be16] flex items-center gap-2">
                    <span role="img" aria-label="Waving hand">👋</span> Hi, I'm Angga
                </h1>
                <h2 className="text-2xl font-normal text-[#292929] dark:text-[#e8f1f2] mb-8 leading-snug">
                    <span className="font-bold text-[#16697a] dark:text-[#f7be16]">Robotics & AI Engineer</span> |{" "}
                    <span className="font-bold text-[#489fb5]">Backend Systems Architect</span>
                    <br /><br />
                    I build smart machines and scalable systems that turn ambitious ideas into reality.<br />
                    Let's connect and create something extraordinary!
                </h2>
                <div className="mt-12 flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <div className="flex items-center">
                        <span className="text-lg font-semibold text-[#489fb5] mr-2">Let’s connect</span>
                        <span aria-hidden="true">👉</span>
                    </div>
                    <div className="flex gap-4 mt-3 sm:mt-0">
                        {socials.map(social => {
                            const Icon = iconMap[social.icon as keyof typeof iconMap];
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    aria-label={social.ariaLabel}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:scale-110 focus:scale-110"
                                    style={{ color: social.color }}
                                    onMouseOver={e => (e.currentTarget.style.color = social.hoverColor)}
                                    onMouseOut={e => (e.currentTarget.style.color = social.color)}
                                    tabIndex={0}
                                    onKeyDown={e => {
                                        if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
                                    }}
                                >
                                    <Icon size={28} aria-hidden="true" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
