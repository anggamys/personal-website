import data from '../constants/data.json';
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

type Social = {
    name: string;
    url: string;
    ariaLabel: string;
    icon: keyof typeof iconMap;
    color: string;
    hoverColor: string;
};

const iconMap = {
    Mail,
    Github,
    Linkedin,
    Instagram,
} as const;

function Introduction() {
    const socials = data.socials as Social[];

    return (
        <section className="min-h-screen flex items-center px-4 bg-[#e8f1f2]">
            <div className="w-full max-w-3xl pl-0 sm:pl-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#16697a] text-left tracking-tight flex items-center gap-2">
                    Hello!
                    <span
                        role="img"
                        aria-label="wave"
                        className="inline-block animate-wave origin-[70%_70%]"
                        style={{
                            display: 'inline-block',
                            transformOrigin: '70% 70%',
                        }}
                    >
                        👋
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-normal text-[#292929] mb-8 leading-snug text-left">
                    I’m <span className="font-bold text-[#16697a]">Moh Angga</span>, a robotics engineer and backend developer.
                    <br /><br />
                    I build scalable systems and intelligent machines that drive innovation.
                </h2>

                <div className="mt-12 flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <div className="flex items-center">
                        <span className="text-lg font-semibold text-[#489fb5] mr-2">Let’s connect</span>
                        <span role="img" aria-label="pointing right">👉</span>
                    </div>
                    <div className="flex gap-4 mt-3 sm:mt-0">
                        {socials.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    aria-label={social.ariaLabel}
                                    title={social.name}
                                    target={social.url.startsWith('http') ? "_blank" : undefined}
                                    rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="transition-colors transform hover:scale-110"
                                    style={{
                                        color: social.color,
                                    }}
                                    onMouseOver={e => (e.currentTarget.style.color = social.hoverColor)}
                                    onMouseOut={e => (e.currentTarget.style.color = social.color)}
                                >
                                    <Icon size={28} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
