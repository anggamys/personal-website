import { Mail, Github, Linkedin, Instagram } from "lucide-react";

function Introduction() {
    return (
        <section className="min-h-screen flex items-center px-4 bg-white">
            <div className="w-full max-w-3xl pl-0 sm:pl-12">
                <h1 className="text-3xl sm:text-4xl font-normal mb-8 text-gray-900 text-left">
                    Hello! <span role="img" aria-label="wave">👋</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-8 leading-snug text-left">
                    I’m <span className="font-bold">Moh Angga</span>, a robotics engineer and backend developer.
                    <br /><br />
                    I build scalable systems and intelligent machines that drive innovation.
                </h2>

                <div className="mt-12 flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <div className="flex items-center">
                        <span className="text-lg text-gray-700 font-normal mr-2">Let’s connect</span>
                        <span role="img" aria-label="pointing right">👉</span>
                    </div>
                    <div className="flex gap-4 mt-3 sm:mt-0">
                        <a
                            href="mailto:anggayunus139@gmail.com"
                            aria-label="Email"
                            title="Email"
                            className="text-gray-600 hover:text-blue-700 transition-colors transform hover:scale-110"
                        >
                            <Mail size={28} />
                        </a>
                        <a
                            href="https://github.com/anggamys"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            className="text-gray-600 hover:text-black transition-colors transform hover:scale-110"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://linkedin.com/in/moh-angga"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                            className="text-gray-600 hover:text-blue-700 transition-colors transform hover:scale-110"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="https://instagram.com/anggamys"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            className="text-gray-600 hover:text-pink-500 transition-colors transform hover:scale-110"
                        >
                            <Instagram size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
