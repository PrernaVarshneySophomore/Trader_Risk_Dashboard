const calculateTotalPnL = (trades) => {

    return trades.reduce(
        (total, trade) => total + trade.pnl,
        0
    );

};



const calculateCurrentBalance = (
    startingBalance,
    totalPnL
)=>{

    return startingBalance + totalPnL;

};



const calculateWinLossTrades = (trades)=>{


    const winningTrades =
        trades.filter(
            trade => trade.pnl > 0
        );


    const losingTrades =
        trades.filter(
            trade => trade.pnl < 0
        );


    return {
        winningTrades,
        losingTrades
    };

};



const calculateWinRate = (
    totalTrades,
    winningTrades
)=>{


    if(totalTrades === 0)
        return 0;


    return (
        winningTrades / totalTrades
    ) * 100;

};



const calculateLargestWin = (trades)=>{


    const wins =
        trades
        .filter(
            trade=>trade.pnl>0
        )
        .map(
            trade=>trade.pnl
        );


    return wins.length
        ? Math.max(...wins)
        : 0;

};



const calculateLargestLoss = (trades)=>{


    const losses =
        trades
        .filter(
            trade=>trade.pnl<0
        )
        .map(
            trade=>trade.pnl
        );


    return losses.length
        ? Math.min(...losses)
        : 0;

};



module.exports = {

    calculateTotalPnL,

    calculateCurrentBalance,

    calculateWinLossTrades,

    calculateWinRate,

    calculateLargestWin,

    calculateLargestLoss

};