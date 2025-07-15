import dataJson from '../constants/data.json';
import type { Experience as ExperienceType } from '../constants/types';
import { motion } from "framer-motion";

const data = dataJson as { experience: ExperienceType[] };

export default function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full py-24 bg-[#e8f1f2] dark:bg-[#202a2d]"
            aria-label="Experience"
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-[#16697a] dark:text-[#f7be16] tracking-widest text-lg sm:text-xl select-none text-left border-l-4 border-[#f7be16] pl-4 bg-transparent">
                        EXPERIENCE
                    </h2>
                </div>
                <div className="sm:w-4/5 w-full">
                    <div className="space-y-8">
                        {data.experience.map((job) => (
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center" key={job.id}>
                                <div>
                                    <div className="font-semibold text-[#16697a] dark:text-[#f7be16] text-lg">
                                        <a
                                            href={job.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline hover:text-[#f7be16] transition"
                                        >
                                            {job.company}
                                        </a>
                                    </div>
                                    <div className="text-[#292929] dark:text-[#e8f1f2] text-base">{job.position}</div>
                                </div>
                                <div className="text-[#489fb5] dark:text-[#f7be16] text-sm sm:text-right mt-2 sm:mt-0">
                                    {job.time}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <a
                            href="https://drive.google.com/file/d/1AG43fh9ngxGhByubn_YO9s_KiLRALiNp/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#16697a] dark:text-[#f7be16] font-semibold hover:underline flex items-center gap-2 group"
                        >
                            View My Resume
                            <span className="group-hover:translate-x-1 transition">
                                <svg width="16" height="16" fill="none" stroke="#f7be16" strokeWidth={2}><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
