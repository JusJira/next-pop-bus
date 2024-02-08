import Clock from "@/components/clock";
import { ModeToggle } from "@/components/themeToggle";
import TimeBox from "@/components/timeBox";
import { Button } from "@/components/ui/button";
import { bus1, bus2, bus3, bus4, bus5_1, bus5_2 } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <div className="box">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(5rem,_1fr))] gap-2">
          <Button asChild>
            <Link href="#bus1">Bus 1</Link>
          </Button>
          <Button asChild>
            <Link href="#bus2">Bus 2</Link>
          </Button>
          <Button asChild>
            <Link href="#bus3">Bus 3</Link>
          </Button>
          <Button asChild>
            <Link href="#bus4">Bus 4</Link>
          </Button>
          <Button asChild>
            <Link href="#bus5">Bus 5</Link>
          </Button>
          <Button asChild>
            <Link href="#map">Map</Link>
          </Button>
        </div>
        <Button asChild>
          <Link href="/all">Show More</Link>
        </Button>
      </div>

      <div className="box" id="bus1">
        <h2 className="w-full text-lg text">Bus 1 Time Schedule</h2>
        <TimeBox time={bus1} hide={true} />
      </div>
      <div className="box" id="bus2">
        <h2 className="label text">Bus 2 Time Schedule</h2>
        <TimeBox time={bus2} hide={true} />
      </div>
      <div className="box" id="bus3">
        <h2 className="text label">Bus 3 Time Schedule</h2>
        <TimeBox time={bus3} hide={true} />
      </div>
      <div className="box" id="bus4">
        <h2 className="label text">Bus 4 Time Schedule</h2>
        <TimeBox time={bus4} hide={true} />
      </div>
      <div className="box" id="bus5">
        <h2 className="label text">Bus 5 Time Schedule (ไม่วน ถ.บรรทัดทอง)</h2>
        <TimeBox time={bus5_1} hide={true} />
      </div>
      <div className="box">
        <h2 className="label text">Bus 5 Time Schedule (วน ถ.บรรทัดทอง)</h2>
        <TimeBox time={bus5_2} hide={true} />
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
