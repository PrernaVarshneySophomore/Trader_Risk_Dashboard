const UserProfile = ()=>{


    return (

        <div

        className="

        flex

        items-center

        gap-3

        "

        >


            {/* User Avatar */}

            <div

            className="

            w-10

            h-10


            rounded-full


            flex

            items-center

            justify-center



            bg-sky-500

            text-white


            font-bold


            shadow-md

            "

            >

            P

            </div>





            {/* User Details */}

            <div

            className="

            hidden

            sm:block

            "

            >

                <p

                className="

                font-semibold

                text-slate-900

                dark:text-white

                "

                >

                PV

                </p>



                <div

                className="

                flex

                items-center

                gap-2

                "

                >


                    <span

                    className="

                    w-2

                    h-2


                    rounded-full


                    bg-emerald-500

                    "

                    >

                    </span>



                    <span

                    className="

                    text-xs

                    text-slate-500

                    dark:text-slate-400

                    "

                    >

                    Online

                    </span>



                </div>



            </div>


        </div>

    );


};


export default UserProfile;