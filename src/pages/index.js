import Head from "next/head";
import Image from "next/image";
import StartTimer from "../components/StartTimer";
import FinishTimer from "../components/FinishTimer";

export default function Home() {
  return (
    <>
      <Head>
        <title>2023世界大露營倒數</title>
      </Head>
      <main className="flex flex-col items-center p-20 text-center select-none min-h-[100vh]">
        <Image
          src="/Official_Logo_for_2023WSJ.png"
          width={579}
          height={387}
          alt="logo"
        />
        <h1 className="mt-5 text-5xl font-black">2023世界大露營倒數</h1>
        <h2 className="text-3xl font-black">
          2023 World Scout Jamboree Countdown
        </h2>
        <div className="mt-10">
          <h3 className="mb-2 text-4xl font-black">開始倒數</h3>
          <StartTimer />
        </div>
        <div className="mt-10">
          <h3 className="mb-2 text-4xl font-black">結束倒數</h3>
          <FinishTimer />
        </div>
      </main>
    </>
  );
}
