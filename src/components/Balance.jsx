"use client"

import React, { useContext, useState } from 'react'
import { Context, useGlobalState } from '@/context/GlobalState'
import { montserrat } from '@/ui/fonts'
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import IncomeExpenses from './IncomeExpenses';

const Balance = () => {
    const { transactions } = useContext(Context)

    // map to get just transactions amount
    const amounts = transactions ? transactions.map(transaction => transaction.amount) : []
    console.log(amounts);
    const [showAmount, setShowAmount] = useState(true)

    const total = amounts.reduce((acc, item) => (acc += item), 0)

    // const { transactions } = useGlobalState()



    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1


    return (
        <div className={`${montserrat.className} bg-zinc-100 pb-4 rounded-lg dark:bg-zinc-900 max-w-lg p-2 px-4 flex flex-col justify-between gap-2`}>
            <div className="flex justify-around items-center font-semibold my-4 max-w-lg">
                <div className=''>
                    <span className='text-sm text-muted-foreground font-medium'>Incomes</span>
                    <p className="text-green-500 text-lg md:text-2xl">$ {' '}{showAmount ? JSON.stringify(income, null, 2) : '****'}</p>
                </div >
                <Separator orientation="vertical" className='h-16 my-auto' />
                <div className=''>
                    <span className='text-sm text-muted-foreground font-medium'>Expenses</span>
                    <p className="text-red-500 text-lg md:text-2xl">$ {' '}{showAmount ? JSON.stringify(expense, null, 2) : '****'}</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <span className='mr-6 text-3xl md:text-4xl font-bold'>
                    ${' '}{showAmount ? JSON.stringify(total, null, 2) : '****'}
                </span>
                <Button className='text-lg' variant='link' onClick={() => setShowAmount(!showAmount)}>
                    {showAmount ? <HiEyeOff /> : <HiEye />}
                </Button>
            </div>
        </div>
    )
}

export default Balance
