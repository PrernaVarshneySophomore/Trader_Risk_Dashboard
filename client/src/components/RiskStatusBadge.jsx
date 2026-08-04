const RiskStatusBadge = ({
    status
})=>{


    const styles = {


        SAFE:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",


        "APPROACHING LIMIT":
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",


        "AT RISK":
        "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"


    };



    const icons = {


        SAFE:"🟢",

        "APPROACHING LIMIT":"⚠️",

        "AT RISK":"🔴"


    };



    return (

        <div

        className={`
        
        px-4

        py-2

        rounded-full

        font-semibold

        text-sm

        ${styles[status]}

        `}

        >

        {icons[status]} {status}


        </div>

    );

};


export default RiskStatusBadge;