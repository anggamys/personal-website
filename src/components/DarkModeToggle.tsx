import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [dark, setDark] = useState(() =>
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((prev) => !prev)}
            className="fixed top-6 right-6 z-50 bg-[#f7be16] rounded-full p-2 shadow-md hover:scale-110 transition"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
