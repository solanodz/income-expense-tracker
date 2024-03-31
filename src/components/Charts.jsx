"use client"

import { useGlobalState } from '@/context/GlobalState'
import { montserrat } from '@/ui/fonts'
import { FaCircle } from 'react-icons/fa'
import { IoIosWarning } from "react-icons/io";
import { VictoryPie, VictoryLabel } from 'victory'
// import { Pie, PieChart, Tooltip } from 'recharts'

const Charts = () => {

    const { transactions } = useGlobalState()

    const total = transactions.reduce((acc, trans) => (acc += trans.amount), 0)

    const totalIncome = transactions
        .filter(trans => trans.amount > 0)
        .reduce((acc, trans) => (acc += trans.amount), 0)

    const totalExpense = transactions
        .filter(trans => trans.amount < 0)
        .reduce((acc, trans) => (acc += trans.amount), 0) * -1;

    const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100)
    const totalIncomesPercentage = 100 - totalExpensesPercentage


    return (
        <div className='max-h-screen flex flex-col w-full'>
            <h2 className={`${montserrat.className} mb-4 text-4xl font-bold antialiased tracking-tight`}>Charts</h2>
            <div className="m-2 font-semibold text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><FaCircle className="text-green-500" /> Incomes</span>
                <span className="flex items-center gap-2"><FaCircle className="text-red-500" /> Expenses</span>
            </div>
            {total === 0 ?
                <div className='w-full items-center flex gap-2 justify-between text-yellow-700 dark:text-yellow-400'>
                    <IoIosWarning className="text-xl " />

                    <p className="flex justify-center italic w-auto mx-auto font-semibold ">No data to show</p>
                </div>
                :
                <VictoryPie
                    data={[
                        { x: "Expenses", y: totalExpensesPercentage },
                        { x: "Incomes", y: totalIncomesPercentage },
                    ]}
                    innerRadius={100}
                    labelComponent={<VictoryLabel textAnchor="middle" dy={-10} />}
                    labelRadius={70}
                    labels={({ datum }) => `${datum.y}%`}
                    radius={140}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 250 },
                    }}
                    scale={{ x: "Expenses", y: "Incomes" }}
                    style={{ labels: { fill: "gray", fontSize: 12, fontWeight: "bold" } }}
                    colorScale={["#ef4444", "#22c55e"]}
                />
            }


        </div>
    )
}

export default Charts