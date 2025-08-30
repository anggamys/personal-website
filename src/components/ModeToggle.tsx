import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export default function ModeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 bg-[#f7be16] hover:bg-[#f7be16]/90 rounded-full p-3 shadow-lg hover:scale-110 focus:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f7be16]/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#202a2d]"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <Sun size={20} className="text-[#16697a] transition-transform duration-200" />
            ) : (
                <Moon size={20} className="text-[#16697a] transition-transform duration-200" />
            )}
        </button>
    );
}
