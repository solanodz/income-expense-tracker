import { ToggleMode } from "@/components/ToggleMode";
import { montserrat } from "@/ui/fonts";
import { GlobalProvider } from "@/context/GlobalState";
import Balance from "@/components/Balance";
import TransactionForm from "@/components/transactions/TransactionForm";
import TransactionList from "@/components/transactions/TransactionList";
import Charts from "@/components/Charts";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <GlobalProvider>
      <main className="flex flex-col md:flex-row gap-4 mx-2 mt-2 pt-1 bg-white dark:bg-zinc-950 ">
        <section className="w-full md:w-1/3">
          <div className="flex">
            <ToggleMode />
            <h1 className={`${montserrat.className} mb-4 text-4xl font-bold antialiased tracking-tight`}>Balance</h1>
          </div>
          <div className="">
            <Balance />
            <TransactionForm />
          </div>
        </section>
        <section className="w-full md:w-1/3 flex flex-col justify-between h-[42rem]">
          <TransactionList />
        </section>
        <section className="md:w-1/3 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-xl flex justify-center w-fit">
          <Charts />
        </section>
      </main>
      <footer className="flex justify-center items-center h-12 bg-white dark:bg-zinc-950">
        <span className="text-xs text-muted-foreground">
          <Link href={'https://solanodz.vercel.app/'} target='_blank' className="font-semibold hover:text-black dark:hover:text-white duration-200">
            @solanodz
          </Link>
          {' '}| 2024
        </span>
      </footer>

    </GlobalProvider>
  );
}
