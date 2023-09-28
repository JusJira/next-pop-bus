import Clock from "@/components/clock";
import { ModeToggle } from "@/components/themeToggle";
import TimeBox from "@/components/timeBox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const bus1 = [
  "06:30",
  "06:45",
  "07:00",
  "07:06",
  "07:12",
  "07:18",
  "07:24",
  "07:30",
  "07:36",
  "07:42",
  "07:48",
  "07:54",
  "08:00",
  "08:06",
  "08:12",
  "08:18",
  "08:24",
  "08:30",
  "08:36",
  "08:42",
  "08:48",
  "08:54",
  "09:00",
  "09:09",
  "09:18",
  "09:27",
  "09:36",
  "09:45",
  "09:54",
  "10:00",
  "10:09",
  "10:18",
  "10:27",
  "10:36",
  "10:45",
  "10:54",
  "11:00",
  "11:09",
  "11:18",
  "11:27",
  "11:36",
  "11:45",
  "11:54",
  "12:00",
  "12:06",
  "12:12",
  "12:18",
  "12:24",
  "12:30",
  "12:36",
  "12:42",
  "12:48",
  "12:54",
  "13:00",
  "13:09",
  "13:18",
  "13:27",
  "13:36",
  "13:45",
  "13:54",
  "14:00",
  "14:09",
  "14:18",
  "14:27",
  "14:36",
  "14:45",
  "14:54",
  "15:00",
  "15:09",
  "15:18",
  "15:27",
  "15:36",
  "15:45",
  "15:54",
  "16:00",
  "16:06",
  "16:12",
  "16:18",
  "16:24",
  "16:30",
  "16:36",
  "16:42",
  "16:48",
  "16:54",
  "17:00",
  "17:06",
  "17:12",
  "17:18",
  "17:24",
  "17:30",
  "17:36",
  "17:42",
  "17:48",
  "17:54",
  "18:00",
  "18:06",
  "18:12",
  "18:18",
  "18:24",
  "18:30",
  "18:36",
  "18:42",
  "18:48",
  "18:54",
  "19:00",
  "19:15",
  "19:45",
  "20:15",
  "20:45",
  "21:15",
  "21:45",
];

const bus2 = [
  "06:00",
  "07:00",
  "07:07",
  "07:15",
  "07:22",
  "07:30",
  "07:37",
  "07:45",
  "07:52",
  "08:00",
  "08:07",
  "08:15",
  "08:22",
  "08:30",
  "08:37",
  "08:45",
  "08:52",
  "09:00",
  "09:12",
  "09:24",
  "09:36",
  "09:48",
  "10:00",
  "10:12",
  "10:24",
  "10:36",
  "10:48",
  "11:00",
  "11:12",
  "11:24",
  "11:36",
  "11:48",
  "12:00",
  "12:07",
  "12:15",
  "12:22",
  "12:30",
  "12:37",
  "12:45",
  "12:52",
  "13:00",
  "13:12",
  "13:24",
  "13:36",
  "13:48",
  "14:00",
  "14:12",
  "14:24",
  "14:36",
  "14:48",
  "15:00",
  "15:12",
  "15:24",
  "15:36",
  "15:48",
  "16:00",
  "16:07",
  "16:15",
  "16:22",
  "16:30",
  "16:37",
  "16:45",
  "16:52",
  "17:00",
  "17:07",
  "17:15",
  "17:22",
  "17:30",
  "17:37",
  "17:45",
  "17:52",
  "18:00",
  "18:07",
  "18:15",
  "18:22",
  "18:30",
  "18:37",
  "18:45",
  "18:52",
  "19:00",
  "19:15",
  "19:45",
  "20:15",
  "20:45",
  "21:15",
  "21:45",
];

const bus3 = [
  "06:50",
  "07:05",
  "07:20",
  "07:35",
  "07:50",
  "08:05",
  "08:20",
  "08:35",
  "08:50",
  "09:05",
  "09:25",
  "09:45",
  "10:05",
  "10:25",
  "10:45",
  "11:05",
  "11:25",
  "11:45",
  "12:05",
  "12:20",
  "12:35",
  "12:50",
  "13:05",
  "13:25",
  "13:45",
  "14:05",
  "14:25",
  "14:45",
  "15:05",
  "15:25",
  "15:45",
  "16:05",
  "16:20",
  "16:35",
  "16:50",
  "17:05",
  "17:20",
  "17:35",
  "17:50",
  "18:05",
  "18:20",
  "18:35",
  "18:50",
];

const bus4 = [
  "06:45",
  "06:55",
  "07:03",
  "07:10",
  "07:18",
  "07:25",
  "07:33",
  "07:40",
  "07:48",
  "07:55",
  "08:03",
  "08:10",
  "08:18",
  "08:25",
  "08:33",
  "08:40",
  "08:48",
  "08:55",
  "09:03",
  "09:15",
  "09:27",
  "09:39",
  "09:51",
  "10:03",
  "10:15",
  "10:27",
  "10:39",
  "10:51",
  "11:03",
  "11:15",
  "11:27",
  "11:39",
  "11:51",
  "12:03",
  "12:10",
  "12:18",
  "12:25",
  "12:33",
  "12:40",
  "12:48",
  "12:55",
  "13:03",
  "13:15",
  "13:27",
  "13:39",
  "13:51",
  "14:03",
  "14:15",
  "14:27",
  "14:39",
  "14:51",
  "15:03",
  "15:15",
  "15:27",
  "15:39",
  "15:51",
  "16:03",
  "16:10",
  "16:18",
  "16:25",
  "16:33",
  "16:40",
  "16:48",
  "16:55",
  "17:03",
  "17:10",
  "17:18",
  "17:25",
  "17:33",
  "17:40",
  "17:48",
  "17:55",
  "18:03",
  "18:10",
  "18:18",
  "18:25",
  "18:33",
  "18:40",
  "18:48",
  "18:55",
  "19:10",
  "19:40",
  "20:10",
  "20:40",
  "21:10",
  "21:40",
];

const bus5_1 = [
  "06:45",
  "07:00",
  "07:15",
  "07:30",
  "07:45",
  "08:00",
  "08:15",
  "08:30",
  "08:45",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
];

const bus5_2 = [
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

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
          src={"/cu-shuttle-bus-route-2560x2440.jpg"}
          alt={"Bus Route Map"}
          width={2560}
          height={2440}
        />
      </div>
    </>
  );
}
