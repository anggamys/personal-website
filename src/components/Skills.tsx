import { useState } from 'react';
import dataJson from '../constants/data.json';

type Skill = {
    header: string;
    items: string[];
};

type Data = {
    skills: Skill[];
};

const data = dataJson as Data;

function Skills() {
    const [showAll, setShowAll] = useState(false);
    const displayedSkills = showAll ? data.skills : data.skills.slice(0, 4);

    return (
        <section className="w-full py-24 bg-[#e8f1f2]">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                {/* Section title, align with background */}
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-[#16697a] tracking-widest text-lg sm:text-xl select-none text-left border-l-4 border-[#f7be16] pl-4 bg-transparent">SKILLS</h2>
                </div>
                {/* Skills grid */}
                <div className="sm:w-4/5 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {displayedSkills.map((skill) => (
                            <div key={skill.header}>
                                <h3 className="text-base font-bold mb-2 text-[#489fb5] uppercase tracking-wide">{skill.header}</h3>
                                <ul className="space-y-1 text-[#292929]">
                                    {skill.items.map((item) => (
                                        <li
                                            key={item}
                                            className="
                            text-base font-normal bg-[#f9fafb] rounded px-2 py-1 inline-block my-1 mx-0.5
                            transition-all duration-300 cursor-pointer
                            hover:bg-[#f7be16]/20 hover:text-[#16697a] 
                            hover:scale-105 hover:-translate-y-1 hover:shadow-md
                            focus:bg-[#f7be16]/30 focus:text-[#16697a] focus:scale-105
                            active:scale-95
                        "
                                            tabIndex={0}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Load More / Show Less button */}
                    {data.skills.length > 4 && (
                        <div className="mt-8 flex justify-center">
                            <button className="px-5 py-2 rounded-full bg-[#f7be16]/10 text-[#16697a] font-semibold border border-[#f7be16] hover:bg-[#f7be16]/30 transition" onClick={() => setShowAll((prev) => !prev)}>
                                {showAll ? 'Show Less' : 'Load More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Skills;
