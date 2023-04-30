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
      <main className="flex flex-col items-center p-5 text-center select-none min-h-[100vh] ">
        <Image
          src="/Official_Logo_for_2023WSJ.png"
          width={579}
          height={387}
          alt="logo"
        />
        <h1 className="mt-5 text-5xl font-black max-sm:text-3xl max-md:text-4xl max-[430px]:text-2xl max-[370px]:text-xl max-[328px]:text-lg max-[339px]:text-base">2023世界大露營倒數</h1>
        <h2 className="text-3xl font-black max-sm:text-xl max-md:text-2xl max-[507px]:text-lg max-[474px]:text-base max-[437px]:text-sm max-[402px]:text-xs max-[367px]:hidden">
          2023 World Scout Jamboree Countdown
        </h2>
        <div className="mt-10">
          <h3 className="mb-2 text-4xl font-black max-md:text-3xl max-sm:xl">開始倒數</h3>
          <StartTimer />
        </div>
        <div className="mt-10">
          <h3 className="mb-2 text-4xl font-black max-md:text-3xl max-sm:xl">結束倒數</h3>
          <FinishTimer />
        </div>
      </main>
    </>
  );
}
