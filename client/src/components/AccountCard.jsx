const AccountCard = ({
    title,
    value,
    icon
})=>{


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

        shadow-lg


        hover:border-sky-500/50

        transition-all

        duration-300

        "

        >


            <div

            className="
            flex
            justify-between
            items-center
            "

            >


                <p

                className="
                text-slate-500
                dark:text-slate-400
                text-m
                "

                >

                {title}

                </p>



                <span>

                {icon}

                </span>


            </div>



            <h3

            className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
            mt-4
            "

            >

            {value}

            </h3>


        </div>

    );

};


export default AccountCard;