import {
    useTheme
}
from "../context/ThemeContext";



const ThemeToggle = ()=>{


    const {
        darkMode,
        setDarkMode

    } = useTheme();




    return (

        <button

        onClick={()=>
            setDarkMode(!darkMode)
        }


        className="
        px-4
        py-2
        rounded-xl

        bg-slate-800
        dark:bg-slate-700

        text-white

        hover:bg-blue-500

        transition-all
        duration-300
        "

        >

        {
            darkMode
            ? "☀️ Light"
            : "🌙 Dark"
        }


        </button>

    );

};


export default ThemeToggle;