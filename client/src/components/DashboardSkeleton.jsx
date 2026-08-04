const DashboardSkeleton = ()=>{


    return (

        <div

        className="

        min-h-screen

        bg-slate-100

        dark:bg-slate-950


        px-4

        py-6

        sm:px-6

        lg:px-8

        "

        >



            {/* Header Skeleton */}

            <div

            className="

            h-10

            w-48


            rounded-lg


            bg-slate-300

            dark:bg-slate-800


            animate-pulse

            "

            />





            {/* Account Cards */}


            <div

            className="

            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4


            gap-6


            mt-10

            "

            >


            {
                Array.from({
                    length:4
                }).map(
                    (_,index)=>(


                    <div

                    key={index}

                    className="

                    h-32

                    rounded-2xl


                    bg-slate-300

                    dark:bg-slate-800


                    animate-pulse

                    "

                    >

                    </div>


                    )

                )
            }


            </div>





            {/* Performance Skeleton */}


            <div

            className="

            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-3


            gap-6


            mt-12

            "

            >



            {
                Array.from({
                    length:6
                }).map(
                    (_,index)=>(


                    <div

                    key={index}

                    className="

                    h-28

                    rounded-2xl


                    bg-slate-300

                    dark:bg-slate-800


                    animate-pulse

                    "

                    />


                    )

                )

            }



            </div>






            {/* Chart Skeleton */}


            <div

            className="

            h-96


            rounded-2xl


            bg-slate-300

            dark:bg-slate-800


            animate-pulse


            mt-12

            "

            />





        </div>


    );


};



export default DashboardSkeleton;