const PerformanceCard = ({
    title,
    value,
    type,
    icon
}) => {


    const getColor = ()=>{


        if(type === "profit")
            return "text-emerald-600 dark:text-emerald-400";


        if(type === "loss")
            return "text-red-600 dark:text-red-400";


        if(type === "percentage")
            return "text-sky-600 dark:text-sky-400";


        return "text-slate-900 dark:text-white";

    };



    return (

        <div

        className="

        bg-white

        dark:bg-slate-900


        border

        border-slate-200

        dark:border-slate-800


        rounded-2xl

        p-6


        shadow-md


        hover:shadow-xl

        hover:border-sky-500/50


        transition-all

        duration-300

        "

        >


            <div

            className="
            flex
            items-center
            gap-3
            "

            >


                <span
                className="
                text-xl
                "
                >

                {icon}

                </span>



                <p

                className="

                text-m

                font-medium

                text-slate-600

                dark:text-slate-400

                "

                >

                {title}

                </p>


            </div>



            <h3

            className={`

            text-2xl

            font-bold

            mt-5

            ${getColor()}

            `}

            >

            {value}

            </h3>



        </div>

    );


};


export default PerformanceCard;