const RiskIndicator = ({
    risk,
    account
}) => {


    const getStatusStyle = () => {


        if(risk.status === "AT RISK")
        {
            return {
                color:
                "text-red-600 dark:text-red-400",

                bg:
                "bg-red-100 dark:bg-red-950/40"
            };
        }


        if(risk.status === "APPROACHING LIMIT")
        {
            return {
                color:
                "text-yellow-600 dark:text-yellow-400",

                bg:
                "bg-yellow-100 dark:bg-yellow-950/40"
            };
        }



        return {

            color:
            "text-emerald-600 dark:text-emerald-400",

            bg:
            "bg-emerald-100 dark:bg-emerald-950/40"

        };


    };



    const statusStyle =
    getStatusStyle();



    const drawdownPercentage =
    (
        risk.currentDrawdown /
        account.maxDrawdown
    ) * 100;



    const dailyLossPercentage =
    (
        risk.dailyLoss /
        account.dailyLossLimit
    ) * 100;




    return (

        <div

        className="

        w-full

        h-full

        bg-white

        dark:bg-slate-900


        border

        border-slate-200

        dark:border-slate-800


        rounded-2xl

        p-6


        shadow-md

        transition-all

        duration-300

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

                    text-slate-900

                    dark:text-white
                    "

                    >

                    🛡️ Risk Status

                    </h2>


                    <p

                    className="
                    text-sm
                    text-slate-600
                    dark:text-slate-400
                    mt-1
                    "

                    >

                    Monitor account rule violations

                    </p>


                </div>




                <div

                className={`

                px-5

                py-2

                rounded-full

                font-semibold

                ${statusStyle.bg}

                ${statusStyle.color}

                `}

                >

                {risk.status}


                </div>


            </div>





            <RiskProgress

            title="Current Drawdown"

            current={risk.currentDrawdown}

            limit={account.maxDrawdown}

            percentage={drawdownPercentage}

            />





            <RiskProgress

            title="Today's Loss"

            current={risk.dailyLoss}

            limit={account.dailyLossLimit}

            percentage={dailyLossPercentage}

            />




            <div

            className="
            grid
            grid-cols-1
            md:grid-cols-2

            gap-5

            mt-6

            "

            >


                <RiskValue

                title="Remaining Drawdown"

                value={risk.remainingDrawdown}

                />


                <RiskValue

                title="Remaining Daily Loss"

                value={risk.remainingDailyLoss}

                />


            </div>



        </div>

    );

};





const RiskProgress = ({
    title,
    current,
    limit,
    percentage
})=>{


return (

<div className="mb-5">


<div

className="
flex
justify-between
mb-2
"

>

<span

className="
text-sm
text-slate-600
dark:text-slate-400
"

>

{title}

</span>



<span

className="
text-sm
font-semibold
text-slate-900
dark:text-white
"

>

${current} / ${limit}

</span>


</div>



<div

className="
h-3

rounded-full

bg-slate-200

dark:bg-slate-800

overflow-hidden

"

>


<div

className="

h-full

bg-sky-500

rounded-full

transition-all

duration-700

"

style={{
    width:`${percentage}%`
}}

>

</div>


</div>


</div>


);


};





const RiskValue = ({
    title,
    value
})=>{


return (

<div

className="
bg-slate-100
dark:bg-slate-800

rounded-xl

p-4
"

>


<p

className="
text-sm
text-slate-600
dark:text-slate-400
"

>

{title}

</p>


<h3

className="
text-xl
font-bold
mt-2

text-slate-900

dark:text-white
"

>

${value}

</h3>


</div>

);


};



export default RiskIndicator;