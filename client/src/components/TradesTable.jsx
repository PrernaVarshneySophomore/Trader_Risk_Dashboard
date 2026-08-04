import {
    useState
} from "react";


import {
    formatCurrency
}
from "../utils/format";



const TradesTable = ({
    trades=[]
})=>{


    const [
        sortOrder,
        setSortOrder
    ] = useState("desc");




    if(!trades.length)

    return (

        <div

        className="

        w-full

        bg-white

        dark:bg-slate-900


        border

        border-slate-200

        dark:border-slate-800


        rounded-2xl

        p-8


        text-center

        "

        >

            <div className="text-4xl">
                📭
            </div>


            <h3

            className="

            mt-4

            text-lg

            font-semibold

            "

            >

            No Trades Available

            </h3>


            <p

            className="

            text-sm

            text-slate-500

            dark:text-slate-400

            mt-2

            "

            >

            Trading activity will appear here

            </p>


        </div>

    );





    const sortedTrades =
    [...trades].sort(

        (a,b)=>

        sortOrder==="desc"

        ?

        b.pnl-a.pnl

        :

        a.pnl-b.pnl

    );







    return (

        <div

        className="

        w-full


        bg-white

        dark:bg-slate-900


        border

        border-slate-200

        dark:border-slate-800


        rounded-2xl


        p-6


        shadow-md

        "

        >




        <div

        className="

        flex

        justify-between

        items-center


        mb-6

        "

        >


            <div>


            <h2

            className="

            text-xl

            font-bold

            "

            >

            📋 Recent Trades

            </h2>



            <p

            className="

            text-sm

            text-slate-500

            dark:text-slate-400

            "

            >

            Review executed trade performance

            </p>


            </div>





            <button

            onClick={()=>


                setSortOrder(

                    sortOrder==="desc"

                    ?

                    "asc"

                    :

                    "desc"

                )


            }


            className="

            px-4

            py-2


            rounded-lg


            bg-sky-500


            text-white


            text-sm


            hover:bg-sky-600


            transition

            "

            >

            P&L

            {
                sortOrder==="desc"
                ?
                " ↓"
                :
                " ↑"
            }


            </button>



        </div>







        {/* DESKTOP TABLE */}



        <div

        className="

        hidden

        md:block

        overflow-x-auto

        "

        >



        <table

        className="

        w-full

        "

        >



        <thead>


        <tr

        className="

        border-b

        dark:border-slate-700

        "

        >

        <th className="p-4 text-left">
            ID
        </th>


        <th className="p-4 text-left">
            Asset
        </th>


        <th className="p-4 text-left">
            Position
        </th>


        <th className="p-4 text-left">
            P&L
        </th>


        </tr>


        </thead>






        <tbody>


        {
            sortedTrades.map(
                trade=>(


                <tr

                key={trade.id}

                className="

                border-b

                dark:border-slate-800


                hover:bg-slate-100

                dark:hover:bg-slate-800


                transition

                "

                >



                <td className="p-4">
                    #{trade.id}
                </td>




                <td className="p-4">


                <span

                className="

                px-3

                py-1

                rounded-full


                bg-sky-100

                dark:bg-sky-950


                text-sky-700

                dark:text-sky-300


                "

                >

                {trade.asset}

                </span>


                </td>





                <td className="p-4">


                <span

                className={`
                
                px-3
                py-1
                rounded-full

                ${
                trade.position==="Long"

                ?

                "bg-emerald-100 text-emerald-700"

                :

                "bg-purple-100 text-purple-700"

                }

                `}

                >

                {trade.position}

                </span>


                </td>





                <td

                className={`

                p-4

                font-bold

                ${
                trade.pnl>=0

                ?

                "text-emerald-500"

                :

                "text-red-500"

                }

                `}

                >

                {
                    trade.pnl>=0
                    ?
                    "↑ "
                    :
                    "↓ "
                }


                {
                    formatCurrency(
                        trade.pnl
                    )
                }


                </td>




                </tr>


                )

            )

        }


        </tbody>



        </table>


        </div>









        {/* MOBILE CARDS */}



        <div

        className="

        md:hidden

        space-y-4

        "

        >


        {
            sortedTrades.map(
                trade=>(


                <div

                key={trade.id}

                className="

                p-4

                rounded-xl


                bg-slate-100

                dark:bg-slate-800

                "

                >



                <div className="flex justify-between">

                <span>
                    {trade.asset}
                </span>


                <span>
                    #{trade.id}
                </span>

                </div>





                <div className="mt-3">


                Position:

                <span className="ml-2 font-semibold">

                {trade.position}

                </span>


                </div>





                <div

                className={`

                mt-3

                font-bold


                ${
                trade.pnl>=0

                ?

                "text-emerald-500"

                :

                "text-red-500"

                }

                `}

                >

                {
                    formatCurrency(
                        trade.pnl
                    )
                }


                </div>



                </div>


                )

            )

        }


        </div>




        </div>


    );


};


export default TradesTable;