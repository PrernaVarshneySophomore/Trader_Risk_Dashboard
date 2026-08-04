const { account, trades } =
require("../data/trades");

const {
    calculateEquityCurve,
    calculateCurrentDrawdown,
    calculateRemainingDrawdown,
    calculateDailyLoss,
    calculateRemainingDailyLoss,
    calculateRiskStatus

} = require("../utils/riskCalculations");

const {
    calculateTotalPnL,
    calculateCurrentBalance,
    calculateWinLossTrades,
    calculateWinRate,
    calculateLargestWin,
    calculateLargestLoss

} = require("../utils/calculations");




const getDashboardData = ()=>{

    const safeTrades = trades || [];


    const totalPnL =
        calculateTotalPnL(safeTrades);



    const currentBalance =
        calculateCurrentBalance(
            account.startingBalance,
            totalPnL
        );



    const {
        winningTrades,
        losingTrades

    } =
    calculateWinLossTrades(safeTrades);



    const winRate =
        calculateWinRate(
            safeTrades.length,
            winningTrades.length
        );



    const largestWinningTrade =
        calculateLargestWin(safeTrades);



    const largestLosingTrade =
        calculateLargestLoss(safeTrades);

    

    const equityCurve =
    calculateEquityCurve(
        account.startingBalance,
        safeTrades
    );



    const currentDrawdown =
    calculateCurrentDrawdown(
        equityCurve
    );



    const remainingDrawdown =
    calculateRemainingDrawdown(
        account.maxDrawdown,
        currentDrawdown
    );



    const dailyLoss =
    calculateDailyLoss(
        safeTrades
    );



    const remainingDailyLoss =
    calculateRemainingDailyLoss(
        account.dailyLossLimit,
        dailyLoss
    );



    const riskStatus =
    calculateRiskStatus(
        currentDrawdown,
        account.maxDrawdown,
        dailyLoss,
        account.dailyLossLimit
    );

    return {


        account:{
            ...account,
            currentBalance
        },


        metrics:{

            totalPnL,

            winningTrades:
            winningTrades.length,

            losingTrades:
            losingTrades.length,

            winRate,

            largestWinningTrade,

            largestLosingTrade

        },

        risk:{

            currentDrawdown,

            remainingDrawdown,

            dailyLoss,

            remainingDailyLoss,

            status:riskStatus

        },


        equityCurve,


        trades:safeTrades

    };


};



module.exports = {
    getDashboardData
};