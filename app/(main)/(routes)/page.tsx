import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[640px] w-full flex flex-row shadow-sm">
      <div className="flex-1 pl-[80px] pt-[75px]">
        <h1 className="pl-[80px] text-3xl font-extrabold text-indigo-600">
          Have a job to do - but no truck?
        </h1>
        <h1 className="pl-[20px] text-2xl font-extrabold text-red-600">No problem! Find and book the right tool for the job!</h1>
        <div>

        </div>
        <h1 className="pt-[50px] text-3x4 font-extrabold text-indigo-600">Empowering Connections, Building Opportunities: Your Community, Your Assets, Your Way.</h1>
        <h2 className="pr-[80px] text-1x4 font-extrabold text-red-600">
        At "I Know a Guy," we're here to empower everyday users like you. Ever found yourself in need of a truck for a
        quick move or a tractor for a French drain project? That's where we step in – connecting you with neighbors who
        have the tools and time to lend a hand.
        </h2>
        <h2 className="flex-1 pl-[400px] text-1x4 font-extrabold text-indigo-600 mt-8">Let's build a stronger community together.</h2>
      </div>
      <div className="h-[640px] w-[960px] relative">
        <Image
          className="self-end"
          src={"/images/truck_hero.png"}
          // height={640}
          fill
          // width={640}
          alt="logo"
        />
      </div>
    </div>
  );
}
