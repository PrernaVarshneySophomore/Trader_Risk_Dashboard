const calculateEquityCurve = (
    startingBalance,
    trades = []
)=>{

    let equity = startingBalance;


    const equityCurve = trades.map((trade)=>{

        equity += trade.pnl;


        return {
            tradeId: trade.id,
            asset: trade.asset,
            pnl: trade.pnl,
            equity
        };

    });


    return equityCurve;

};




const calculateCurrentDrawdown = (
    equityCurve=[]
)=>{

    if(equityCurve.length===0)
        return 0;


    let peak = equityCurve[0].equity;

    let current =
        equityCurve[equityCurve.length-1].equity;



    equityCurve.forEach((point)=>{


        if(point.equity > peak){

            peak = point.equity;

        }


    });



    return Math.max(peak-current, 0);

};





const calculateRemainingDrawdown = (
    maxDrawdown,
    currentDrawdown
)=>{


    return Math.max(
        maxDrawdown -
        currentDrawdown,
        0
    );

};






const calculateDailyLoss = (
    trades=[]
)=>{


    const losingTrades =
        trades.filter(
            trade=>trade.pnl < 0
        );


    const totalLoss =
        losingTrades.reduce(
            (total,trade)=>
            total + Math.abs(trade.pnl),
            0
        );


    return totalLoss;

};







const calculateRemainingDailyLoss = (
    dailyLossLimit,
    dailyLoss
)=>{


    return Math.max(
        dailyLossLimit -
        dailyLoss,
        0
    );

};






const calculateRiskStatus = (
    currentDrawdown,
    maxDrawdown,
    dailyLoss,
    dailyLossLimit
)=>{


    const drawdownPercentage =
    currentDrawdown/maxDrawdown;



    const dailyLossPercentage =
    dailyLoss/dailyLossLimit;





    const highestRisk =
    Math.max(
        drawdownPercentage,
        dailyLossPercentage
    );





    if(highestRisk>=1)

    return "AT RISK";





    if(highestRisk>=0.7)

    return "APPROACHING LIMIT";





    return "SAFE";


};





module.exports = {

    calculateEquityCurve,

    calculateCurrentDrawdown,

    calculateRemainingDrawdown,

    calculateDailyLoss,

    calculateRemainingDailyLoss,

    calculateRiskStatus

};