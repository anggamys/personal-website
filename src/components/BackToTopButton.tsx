import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 200);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="
            fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full
            bg-[#e8f1f2]/70 dark:bg-[#303d40]/70 backdrop-blur-md shadow-2xl border border-[#489fb5]/40
            text-[#16697a] dark:text-[#f7be16] font-bold
            transition-all duration-300
            hover:bg-[#f7be16]/80 hover:text-[#16697a] hover:scale-110 hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-[#489fb5]/50
            group
          "
                    aria-label="Back to top"
                    style={{ backdropFilter: "blur(10px)" }}
                >
                    <span className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125">
                        <ArrowUp size={22} />
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
