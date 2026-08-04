import useDashboard from "../hooks/useDashboard";

import Header from "../components/Header";

import SectionTitle from "../components/SectionTitle";

import AccountCard from "../components/AccountCard";

import PerformanceCard
from "../components/PerformanceCard";


import {
    formatCurrency,
    formatPercentage
}
from "../utils/format";

import RiskIndicator 
from "../components/RiskIndicator";

import EquityChart 
from "../components/EquityChart";

import TradesTable
from "../components/TradesTable";

import DashboardSkeleton
from "../components/DashboardSkeleton";


import ErrorState
from "../components/ErrorState";

import RiskStatusBadge
from "../components/RiskStatusBadge";

const Dashboard = ()=>{


    const {
        dashboard,
        loading,
        error

    } = useDashboard();



    if(loading)
    return (

        <DashboardSkeleton />


    );



    if(error)
    return (

        <ErrorState

        message={error}

        />

    );



    const {
        account = {},
        metrics = {},
        risk = {},
        equityCurve = [],
        trades = []

    } = dashboard;




    return (

        <div

        className="
        min-h-screen

        bg-slate-100
        text-slate-900

        dark:bg-slate-950
        dark:text-white

        p-8

        transition-all
        duration-500

        "

        >


            <Header />



            <SectionTitle

            icon="💼"

            title="Account Overview"

            subtitle="Monitor your account capital and risk limits"

            rightContent={

                <RiskStatusBadge

                status={risk.status}

                />

            }

            />



            <div

            className="
            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4

            gap-6

            "

            >


                <AccountCard

                title="Starting Balance"

                value={
                    `$${account.startingBalance}`
                }

                icon="💰"

                />



                <AccountCard

                title="Current Balance"

                value={
                    `$${account.currentBalance}`
                }

                icon="📈"

                />



                <AccountCard

                title="Maximum Drawdown"

                value={
                    `$${account.maxDrawdown}`
                }

                icon="⚠️"

                />



                <AccountCard

                title="Daily Loss Limit"

                value={
                    `$${account.dailyLossLimit}`
                }

                icon="🔥"

                />


            </div>

            <br /><br />

            <SectionTitle

            icon="📊"

            title="Trading Performance"

            subtitle="Analyze profitability and trading statistics"

            />



            <div

            className="

            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-3

            gap-6

            "

            >


            <PerformanceCard

            title="Total P&L"

            value={
                formatCurrency(
                    metrics.totalPnL
                )
            }

            type="profit"

            icon="💹"

            />



            <PerformanceCard

            icon="🏆"

            title="Winning Trades"

            value={
                metrics.winningTrades
            }

            type="percentage"

            />



            <PerformanceCard

            icon="📉"

            title="Losing Trades"

            value={
                metrics.losingTrades
            }

            type="loss"

            />



            <PerformanceCard

            icon="🎯"

            title="Win Rate"

            value={
                formatPercentage(
                    metrics.winRate
                )
            }

            type="percentage"

            />



            <PerformanceCard

            icon="🚀"

            title="Largest Winning Trade"

            value={
                formatCurrency(
                    metrics.largestWinningTrade
                )
            }

            type="profit"

            />



            <PerformanceCard

            icon="⚠️"

            title="Largest Losing Trade"

            value={
                formatCurrency(
                    metrics.largestLosingTrade
                )
            }

            type="loss"

            />


            </div>

            <br /><br />

            <div

            className="

            grid

            grid-cols-1

            lg:grid-cols-2

            gap-8

            items-stretch

            mt-10

            "

            >


            <div
            
            className="

            w-full

            flex

            flex-col

            "
            
            >

            <SectionTitle

            icon="🛡️"

            title="Risk Management"

            subtitle="
            Understand your account safety level
            "

            />

            <div className="flex-1">

            <RiskIndicator

            risk={risk}

            account={account}

            />

            </div>

            </div>

            <div className="
            
            -full

            flex

            flex-col

            ">


            <SectionTitle

            icon="📈"

            title="Performance Trend"

            subtitle="
            Visualize account growth over executed trades
            "

            />

            <div className="flex-1">

            <EquityChart

            data={equityCurve}

            />

            </div>

            </div>

            </div>

            <br /><br />


            <SectionTitle

            icon="📋"

            title="Trade History"

            subtitle="Review individual trade performance"

            />



            <TradesTable

            trades={trades}

            />


        </div>

        

    );


};


export default Dashboard;