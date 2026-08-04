const ErrorState = ({
    message
})=>{


    return (

        <div

        className="

        min-h-screen

        flex

        justify-center

        items-center


        bg-slate-100

        dark:bg-slate-950

        "

        >


            <div

            className="

            text-center

            bg-white

            dark:bg-slate-900


            rounded-2xl


            p-8


            shadow-lg

            "

            >



                <div

                className="text-5xl"

                >

                ⚠️

                </div>




                <h2

                className="

                mt-4

                text-xl

                font-bold

                "

                >

                Something went wrong

                </h2>




                <p

                className="

                mt-2

                text-slate-500

                dark:text-slate-400

                "

                >

                {message}

                </p>




            </div>


        </div>

    );

};


export default ErrorState;