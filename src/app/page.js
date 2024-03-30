import { ToggleMode } from "@/components/ToggleMode";
import { montserrat } from "@/ui/fonts";
import { GlobalProvider } from "@/context/GlobalState";
import Balance from "@/components/Balance";
import TransactionForm from "@/components/transactions/TransactionForm";
import TransactionList from "@/components/transactions/TransactionList";
import Charts from "@/components/Charts";
import { FaCircle } from "react-icons/fa";
export default function Home() {
  return (
    <GlobalProvider>
      <main className="flex justify-center flex-col md:flex-row gap-4 m-2 p-4 bg-white dark:bg-zinc-950 ">
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
        <section className="w-full md:w-1/3 bg-zinc-100 dark:bg-zinc-900  p-2 rounded-xl flex">
          <Charts />
        </section>
      </main>

    </GlobalProvider>
  );
}
