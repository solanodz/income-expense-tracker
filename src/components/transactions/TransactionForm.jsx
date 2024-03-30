"use client"

import { useContext, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Context, useGlobalState } from '@/context/GlobalState'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from '../ui/label'
import { IoIosWarning } from 'react-icons/io'


const TransactionForm = () => {

    const { addTransaction } = useGlobalState()


    const [desc, setDesc] = useState()
    const [amount, setAmount] = useState()

    const onSubmitIncome = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(),
            desc,
            amount: +amount
        })
        setDesc('')
        setAmount('')

    }

    const onSubmitExpense = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(),
            desc,
            amount: -amount
        })
        setDesc('')
        setAmount('')
    }

    return (
        <div>
            <h2 className='text-lg font-medium tracking-tight mt-12'>Transaction Form</h2>
            <span className=' flex gap-1 text-muted-foreground italic text-xs mb-4'>Select the type of movement before adding the transaction.</span>
            <Tabs defaultValue="income" className="">
                <TabsList className='flex mx-auto w-fit'>
                    <TabsTrigger value="income" className='px-8 w-fit'>Income</TabsTrigger>
                    <TabsTrigger value="expense" className='px-8 w-fit'>Expense</TabsTrigger>
                </TabsList>
                <form onSubmit={onSubmitIncome} className='max-w-lg'>
                    <TabsContent value="income" className='flex flex-col gap-3'>
                        <div>
                            <Label>Income title</Label>
                            <Input
                                type="text"
                                placeholder="Enter Description"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            />
                        </div>
                        <div>
                            <Label>Income amount</Label>
                            <Input
                                type="number"
                                step='0.01'
                                placeholder="00.00"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                        </div>
                        <Button type="submit">Add Transaction</Button>
                    </TabsContent>
                </form>
                <form onSubmit={onSubmitExpense} className='max-w-lg '>
                    <TabsContent value="expense" className='flex flex-col gap-3'>
                        <div>
                            <Label>Expense title</Label>
                            <Input
                                type="text"
                                placeholder="Enter Description"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            />
                        </div>
                        <div>
                            <Label>Expense amount</Label>
                            <Input
                                type="number"
                                step='0.01'
                                placeholder="00.00"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                        </div>
                        <Button type="submit">Add Transaction</Button>
                    </TabsContent>
                </form>
            </Tabs>


            {/* 
                <Input
                    type="text"
                    placeholder="Enter Description"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <Input
                    type="number"
                    step='0.01'
                    placeholder="00.00"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
                <Button type="submit">Add Transaction</Button>
            </form> */}
        </div >
    )
}

export default TransactionForm
