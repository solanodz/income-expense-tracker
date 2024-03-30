"use client"

import { useGlobalState } from '@/context/GlobalState'
import React from 'react'
import { Button } from '../ui/button'
import { FaTrash } from 'react-icons/fa'
import { ScrollArea } from '../ui/scroll-area'
import { montserrat } from '@/ui/fonts'
import { IoIosWarning } from 'react-icons/io'

const TransactionList = () => {

  const { transactions, deleteTransaction } = useGlobalState()

  return (
    <div className=' max-w-lg'>
      <h2 className={`${montserrat.className} mb-4 text-4xl font-bold antialiased tracking-tight`}>Movements</h2>


      <ScrollArea id="list" className='flex flex-col gap-1 max-h-[38.5rem] rounded-md w-auto sm:pr-4 '>
        {transactions.length === 0 ?
          <div className='w-fit items-center flex gap-2 justify-center text-yellow-700 dark:text-yellow-400'>
            <IoIosWarning className="text-xl " />
            <p className="flex justify-center italic w-auto mx-auto font-semibold ">No transactions yet</p>
          </div>
          :
          transactions && transactions.map(transaction => (
            <li className='text-xs my-1 max-w-lg flex md:max-w-96 justify-between sm:text-sm font-medium text-muted-foreground border border-zinc-300 dark:border-zinc-800  drop-shadow-sm bg-zinc-50 dark:bg-zinc-900 items-center px-2 rounded-lg' key={transaction.id}>
              <p className='mr-4 max-w-96'>{transaction.desc}</p>
              <div className='flex items-center'>
                <span className={`${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>${Math.abs(transaction.amount)}</span>
                <Button
                  onClick={() => deleteTransaction(transaction.id)}
                  size='sm'
                  variant='link'
                >
                  <FaTrash className='text-zinc-500 hover:text-zinc-950 dark:hover:text-white duration-100' />
                </Button>
              </div>
            </li>
          ))}
      </ScrollArea>
    </div >
  )
}

export default TransactionList
