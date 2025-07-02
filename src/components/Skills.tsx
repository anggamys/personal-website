// Skills.jsx
import { useState } from 'react';
import data from '../constants/data.json';

function Skills() {
    const [showAll, setShowAll] = useState(false);
    const displayedSkills = showAll ? data.skills : data.skills.slice(0, 4);

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row px-4">
                {/* Section title, align with background */}
                <div className="sm:w-1/5 w-full mb-6 sm:mb-0 flex items-start">
                    <h2 className="font-bold text-blue-600 tracking-widest text-lg sm:text-xl select-none text-left">
                        SKILLS
                    </h2>
                </div>
                {/* Skills grid */}
                <div className="sm:w-4/5 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {displayedSkills.map((skill) => (
                            <div key={skill.header}>
                                <h3 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide">
                                    {skill.header}
                                </h3>
                                <ul className="space-y-1 text-gray-700">
                                    {skill.items.map((item) => (
                                        <li key={item} className="text-base font-normal">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Tombol Load More / Show Less */}
                    {data.skills.length > 4 && (
                        <div className="mt-8 flex justify-center">
                            <button
                                className="px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition"
                                onClick={() => setShowAll((prev) => !prev)}
                            >
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
