const SectionTitle = ({
    icon,
    title,
    subtitle,
    rightContent
})=>{


    return (

        <div

        className="

        flex

        flex-col

        sm:flex-row

        sm:justify-between

        gap-4

        items-start

        sm:items-center


        mb-6

        "

        >



            <div>


                <div

                className="

                flex

                items-center

                gap-3

                "

                >

                    <span

                    className="text-2xl"

                    >

                    {icon}

                    </span>



                    <h2

                    className="

                    text-2xl

                    font-bold


                    text-slate-900

                    dark:text-white

                    "

                    >

                    {title}

                    </h2>


                </div>



                <p

                className="

                mt-2

                text-sm


                text-slate-600

                dark:text-slate-400

                "

                >

                {subtitle}

                </p>



            </div>





            {
                rightContent
            }



        </div>


    );


};


export default SectionTitle;