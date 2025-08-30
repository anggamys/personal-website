import { ArrowUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {
    const [show, setShow] = useState(false);

    const onScroll = useCallback(() => {
        setShow(window.scrollY > 200);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    useEffect(() => {
        // Throttle scroll events for better performance
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [onScroll]);

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full
            bg-[#e8f1f2]/80 dark:bg-[#303d40]/80 backdrop-blur-md shadow-2xl border border-[#489fb5]/40
            text-[#16697a] dark:text-[#f7be16] font-bold
            transition-all duration-300
            hover:bg-[#f7be16]/90 hover:text-[#16697a] hover:scale-110 hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-[#489fb5]/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#202a2d]
            group
            active:scale-95
          "
                    aria-label="Back to top"
                    style={{ backdropFilter: "blur(10px)" }}
                >
                    <motion.span
                        className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={22} />
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
