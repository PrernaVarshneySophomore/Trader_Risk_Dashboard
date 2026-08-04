import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceDot
}
from "recharts";





const EquityChart = ({
    data
})=>{


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

        "

        >



            <div className="mb-6">


                <h2

                className="
                text-xl
                font-bold

                text-slate-900

                dark:text-white
                "

                >

                📈 Equity Curve

                </h2>



                <p

                className="
                text-sm

                text-slate-600

                dark:text-slate-400

                mt-1

                "

                >

                Account balance movement by trade

                </p>


            </div>





            <ResponsiveContainer

            width="100%"

            height={380}

            >


                <LineChart

                data={data}

                margin={{
                    top:50,
                    right:40,
                    left:50,
                    bottom:60
                }}

                >



                <CartesianGrid

                strokeDasharray="3 3"

                />




                <XAxis

                dataKey="asset"

                tick={{

                    fill:
                    "#94a3b8",

                    fontSize:12

                }}

                axisLine={{

                    stroke:"#64748b"

                }}

                tickLine={{

                    stroke:"#64748b"

                }}

                label={{

                    value:"Asset",

                    position:"insideBottom",

                    offset:-35,

                    fill:"#cbd5e1",

                    fontSize:14

                }}

                />




                <YAxis

                tick={{

                    fill:
                    "#94a3b8",

                    fontSize:12

                }}


                axisLine={{

                    stroke:"#64748b"

                }}


                tickLine={{

                    stroke:"#64748b"

                }}


                label={{

                    value:"Equity ($)",

                    angle:-90,

                    position:"insideLeft",

                    offset:-35,

                    fill:"#cbd5e1",

                    fontSize:14

                }}

                />





                <Tooltip

                contentStyle={{

                    backgroundColor:
                    "#0f172a",

                    border:
                    "1px solid #334155",

                    borderRadius:
                    "12px",

                    color:
                    "#ffffff"

                }}


                labelStyle={{

                    color:"#38bdf8"

                }}


                />





                <Line

                type="monotone"

                dataKey="equity"

                stroke="#38bdf8"

                strokeWidth={3}


                dot={
                    (props)=>{


                        const {
                            cx,
                            cy,
                            payload

                        }=props;



                        return (

                            <g>


                            <circle

                            cx={cx}

                            cy={cy}

                            r={6}

                            fill={
                                payload.pnl >=0
                                ?
                                "#22c55e"
                                :
                                "#ef4444"
                            }

                            />



                            <text

                            x={cx}

                            y={cy-15}

                            textAnchor="middle"

                            fontSize="12"

                            fill={
                                payload.pnl >=0
                                ?
                                "#22c55e"
                                :
                                "#ef4444"
                            }

                            >

                            {
                                payload.pnl >=0
                                ?
                                `+${payload.pnl}`
                                :
                                payload.pnl
                            }


                            </text>


                            </g>

                        );

                    }
                }


                />




                </LineChart>


            </ResponsiveContainer>



        </div>


    );


};



export default EquityChart;