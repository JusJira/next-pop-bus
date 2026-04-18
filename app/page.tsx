import Clock from "@/components/clock";
import { ModeToggle } from "@/components/themeToggle";
import TerminalBoard from "@/components/terminalBoard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      {/* <div className="box">
        <h1 className="text-2xl font-bold text-center mb-4 text">
          CU Pop Bus Tracker
        </h1>
        <Button asChild className="w-full">
          <Link href="/all">View All Bus Schedules</Link>
        </Button>
      </div> */}

      <div className="w-full mx-auto my-8 px-4 md:px-0">
        <TerminalBoard />
      </div>

      <div className="box" id="map">
        <h2 className="label text">Bus Routes</h2>
        <Image
          title="Bus Route Map"
          src={"/cu-shuttle-bus-route-2560x2440.jpg"}
          alt={"Bus Route Map"}
          width={2560}
          height={2440}
          sizes="(min-width: 2820px) 2560px, (min-width: 640px) calc(94.07vw - 74px), calc(100vw - 64px)"
        />
      </div>
    </>
  );
}
