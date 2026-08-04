import ThemeToggle from "./ThemeToggle";

import UserProfile from "./UserProfile";


const Header = ()=>{


    return (

        <header

        className="

        sticky

        top-0

        z-50


        -mx-8

        px-8


        py-5


        mb-10



        bg-slate-200

        dark:bg-[#071426]



        backdrop-blur-lg



        border-b

        border-sky-200

        dark:border-sky-900



        shadow-lg

        shadow-slate-300/40

        dark:shadow-black/40



        transition-all

        duration-500


        "


        >



            <div

            className="

            flex

            flex-col

            sm:flex-row


            justify-between


            items-start

            sm:items-center


            gap-5

            "

            >




                {/* Dashboard Title */}

                <div>


                    <h1

                    className="

                    text-3xl

                    font-bold


                    text-sky-600

                    dark:text-sky-400

                    "

                    >

                    Trader Risk Dashboard

                    <span
                    className="
                    inline-flex
                    items-center
                    gap-2
                    ml-3
                    text-sm
                    text-red-500
                    "
                    >
                    <span
                    className="
                    w-2
                    h-2
                    rounded-full
                    bg-red-500
                    animate-pulse
                    "
                    />

                    LIVE

                    </span>

                    </h1>




                    <p

                    className="

                    text-slate-600

                    dark:text-slate-400


                    mt-2

                    "

                    >

                    Monitor performance and account risk

                    </p>


                </div>

                





                {/* Right Side */}

                <div

                className="

                flex

                items-center

                gap-5

                "

                >


                    <UserProfile />


                    <ThemeToggle />


                </div>



            </div>



        </header>

    );


};


export default Header;