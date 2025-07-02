import data from '../constants/data.json';

function Experience() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                {/* Section title, align left with others */}
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-blue-600 tracking-widest text-lg sm:text-xl select-none text-left">
                        EXPERIENCE
                    </h2>
                </div>
                {/* Section content */}
                <div className="sm:w-4/5 w-full">
                    <div className="space-y-8">
                        {data.experience.map((job) => (
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center" key={job.company + job.time}>
                                <div>
                                    <div className="font-semibold text-gray-900 text-lg">
                                        <a
                                            href={job.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline hover:text-blue-700 transition"
                                        >
                                            {job.company}
                                        </a>
                                    </div>
                                    <div className="text-gray-700 text-base">{job.position}</div>
                                </div>
                                <div className="text-gray-500 text-sm sm:text-right mt-2 sm:mt-0">{job.time}</div>
                            </div>
                        ))}
                    </div>
                    {/* Resume link (optional) */}
                    <div className="mt-8">
                        <a
                            href="https://drive.google.com/file/d/1AG43fh9ngxGhByubn_YO9s_KiLRALiNp/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:underline flex items-center gap-2 group"
                        >
                            View My Resume
                            <span className="group-hover:translate-x-1 transition">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
