import { useState } from "react";
import dataJson from "../constants/data.json";
import type { Project as ProjectType } from "../constants/types";
import { motion } from "framer-motion";

const isYouTube = (url: string) =>
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11,})/.test(url);

const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11,})/);
    return match ? match[1] : null;
};

const isGoogleDrive = (url: string) =>
    /drive\.google\.com/.test(url);

const toGoogleDrivePreview = (url: string) =>
    url.includes("/file/d/") ? url.replace(/\/view.*$/, "/preview") : url;

const data = dataJson as { projects: ProjectType[] };

export default function Projects() {
    const [openProject, setOpenProject] = useState<string | null>(null);

    const handleToggle = (name: string) => {
        setOpenProject(openProject === name ? null : name);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full py-24 bg-[#e8f1f2] dark:bg-[#202a2d]"
            aria-label="Projects"
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-[#16697a] dark:text-[#f7be16] tracking-widest text-lg sm:text-xl select-none text-left border-l-4 border-[#f7be16] pl-4 bg-transparent uppercase">
                        Projects
                    </h2>
                </div>
                <div className="sm:w-4/5 w-full space-y-10">
                    {data.projects.map((project) => (
                        <div key={project.name} className="relative">
                            <div className="flex items-center gap-2">
                                {project.url ? (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-lg text-[#16697a] dark:text-[#f7be16] hover:text-[#f7be16] hover:underline flex items-center gap-1 transition group"
                                    >
                                        {project.name}
                                        <span className="inline-block">
                                            <svg width="18" height="18" fill="none" stroke="#f7be16" strokeWidth={2} className="group-hover:translate-x-1 transition"><path d="M3 9h12M12 6l3 3-3 3" /></svg>
                                        </span>
                                    </a>
                                ) : (
                                    <span className="font-bold text-lg text-[#16697a] dark:text-[#f7be16]">{project.name}</span>
                                )}
                            </div>
                            <p className="text-[#292929] dark:text-[#e8f1f2] mt-1 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {project.used.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-semibold px-3 py-1 rounded border border-[#489fb5] text-[#16697a] dark:text-[#f7be16] bg-[#f9fafb] dark:bg-[#303d40] hover:bg-[#489fb5] hover:text-white dark:hover:bg-[#f7be16] dark:hover:text-[#202a2d] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.media && project.media.length > 0 && (
                                <div className="mt-2 flex">
                                    <button
                                        className={`
                      px-5 py-2 rounded-full shadow-sm border border-[#489fb5] 
                      bg-white dark:bg-[#303d40] text-base font-semibold flex items-center gap-2 transition-all
                      focus:outline-none focus:ring-2 focus:ring-[#489fb5]/50
                      ${openProject === project.name
                                                ? "text-[#f7be16] bg-[#16697a]/10 border-[#f7be16] ring-2 ring-[#f7be16]/30 dark:text-[#f7be16]"
                                                : "text-[#16697a] dark:text-[#f7be16] hover:text-[#f7be16] hover:bg-[#489fb5]/10"}
                    `}
                                        onClick={() => handleToggle(project.name)}
                                        aria-expanded={openProject === project.name}
                                    >
                                        {openProject === project.name ? "Show Less" : "Show Media"}
                                        <span className={`transition-transform duration-300 ${openProject === project.name ? "rotate-180" : ""}`}>
                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path d="M6 8l4 4 4-4" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            )}
                            {openProject === project.name && project.media && (
                                <div className="mt-5 flex flex-wrap gap-4">
                                    {project.media.map((media, index) => {
                                        // IMAGE
                                        if (media.type === "image") {
                                            return (
                                                <img
                                                    key={`${media.src}-${index}`}
                                                    src={media.src}
                                                    alt={media.alt}
                                                    loading="lazy"
                                                    className="rounded-lg shadow max-w-xs border border-[#e8f1f2] dark:border-[#303d40] bg-white dark:bg-[#303d40] transition-transform hover:scale-105"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                    }}
                                                />
                                            );
                                        }
                                        // YOUTUBE VIDEO
                                        if (media.type === "video" && isYouTube(media.src)) {
                                            const videoId = getYouTubeId(media.src);
                                            const embedUrl = videoId
                                                ? `https://www.youtube.com/embed/${videoId}`
                                                : media.src;
                                            return (
                                                <iframe
                                                    key={`${media.src}-${index}`}
                                                    src={embedUrl}
                                                    title={media.alt}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="rounded-lg border border-[#e8f1f2] dark:border-[#303d40] bg-white dark:bg-[#303d40] w-80 h-44 transition-transform hover:scale-105"
                                                    loading="lazy"
                                                />
                                            );
                                        }
                                        // GOOGLE DRIVE VIDEO or PDF
                                        if (isGoogleDrive(media.src)) {
                                            const embedUrl = toGoogleDrivePreview(media.src);
                                            return (
                                                <iframe
                                                    key={`${media.src}-${index}`}
                                                    src={embedUrl}
                                                    title={media.alt}
                                                    allow="autoplay; encrypted-media"
                                                    allowFullScreen
                                                    className="rounded-lg border border-[#e8f1f2] dark:border-[#303d40] bg-white dark:bg-[#303d40] w-80 h-44 transition-transform hover:scale-105"
                                                    loading="lazy"
                                                />
                                            );
                                        }
                                        // PDF (external, not Drive)
                                        if (media.type === "pdf") {
                                            return (
                                                <a
                                                    key={`${media.src}-${index}`}
                                                    href={media.src}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7be16]/10 dark:bg-[#303d40] text-[#16697a] dark:text-[#f7be16] rounded-lg border border-[#f7be16] hover:bg-[#f7be16]/20 transition-colors font-semibold"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2L13.09 8.26L14 2L15.09 8.26L16 2L17.09 8.26L18 2L19.09 8.26L20 2V22H4V2L5.91 8.26L7 2L8.09 8.26L9 2L10.09 8.26L11 2L12.09 8.26Z" />
                                                    </svg>
                                                    {media.alt || "View PDF"}
                                                </a>
                                            );
                                        }
                                        // VIDEO (other - fallback)
                                        if (media.type === "video") {
                                            return (
                                                <iframe
                                                    key={`${media.src}-${index}`}
                                                    src={media.src}
                                                    title={media.alt}
                                                    allow="autoplay; encrypted-media"
                                                    allowFullScreen
                                                    className="rounded-lg border border-[#e8f1f2] dark:border-[#303d40] bg-white dark:bg-[#303d40] w-80 h-44 transition-transform hover:scale-105"
                                                    loading="lazy"
                                                />
                                            );
                                        }
                                        // fallback
                                        return (
                                            <span key={`${media.src}-${index}`} className="text-sm text-[#292929] dark:text-[#f7be16] p-2 bg-[#f9fafb] dark:bg-[#303d40] rounded border">
                                                [Unsupported media type: {media.type}]
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
