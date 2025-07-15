import data from '../constants/data.json';

type Social = {
    name: string;
    url: string;
    ariaLabel: string;
};

export default function Footer() {
    const socials = (data.socials as Social[]) ?? [];

    return (
        <footer className="w-full bg-[#16697a] dark:bg-[#202a2d] text-[#e8f1f2] py-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
                <p className="text-sm font-medium tracking-wide">
                    © {new Date().getFullYear()} Moh Angga &mdash; All Rights Reserved.
                </p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.url.startsWith('http') ? "_blank" : undefined}
                            rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="hover:text-[#f7be16] transition font-semibold"
                            aria-label={social.ariaLabel}
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 mt-6 border-t border-[#489fb5]/30 pt-3 text-center">
                <span className="text-xs text-[#e8f1f2]/70">
                    Inspired by&nbsp;
                    <a
                        href="https://v3.brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#f7be16] font-semibold transition"
                    >
                        Brittany Chiang
                    </a>
                </span>
            </div>
        </footer>
    );
}
