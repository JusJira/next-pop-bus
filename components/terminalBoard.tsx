"use client";

import { busScheduleData } from "@/lib/newdata";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { BusFront, Clock } from "lucide-react";
import classNames from "classnames";

type Departure = {
  timeInfo: DateTime;
  line: string;
  path: string;
  notes?: string;
  isLastBus?: boolean;
};

export default function TerminalBoard() {
  const [now, setNow] = useState<DateTime | null>(null);

  useEffect(() => {
    setNow(DateTime.local().setZone("Asia/Bangkok"));
    const interval = setInterval(() => {
      setNow(DateTime.local().setZone("Asia/Bangkok"));
    }, 1000); // update every 1 second
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <div className="bg-black p-6 rounded-xl flex justify-center items-center h-64 text-amber-500 font-mono animate-pulse">
        LOADING DEPARTURES...
      </div>
    );
  }

  const weekday = now.weekday; // 1 = Monday, 6 = Saturday, 7 = Sunday
  const dayType =
    weekday === 6 ? "Saturday" : weekday === 7 ? "Sunday" : "Monday-Friday";

  const upcomingDepartures: Departure[] = [];

  if (dayType !== "Sunday") {
    busScheduleData.routes.forEach((route) => {
      if (route.days === dayType) {
        route.schedule.forEach((sched) => {
          sched.minutes.forEach((minute, idx) => {
            const departureTime = now.set({
              hour: sched.hour,
              minute: minute,
              second: 0,
              millisecond: 0,
            });
            // Show buses that are deploying right now or in the future
            if (departureTime >= now) {
              upcomingDepartures.push({
                timeInfo: departureTime,
                line: route.line,
                path: route.path,
                notes: sched.notes || route.generalNotes,
                isLastBus: sched.isLastBus && idx === sched.minutes.length - 1,
              });
            }
          });
        });
      }
    });
  }

  // Sort by next departure
  upcomingDepartures.sort(
    (a, b) => a.timeInfo.toMillis() - b.timeInfo.toMillis(),
  );

  const displayDepartures = upcomingDepartures.slice(0, 12);

  return (
    <div className="w-full bg-black text-amber-400 font-mono uppercase tracking-widest rounded-xl p-4 md:p-8 shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-neutral-800 overflow-hidden select-none">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 border-b-2 border-neutral-800 pb-4 gap-4">
        <div className="flex items-center gap-3 text-2xl md:text-4xl text-amber-500 font-bold">
          <BusFront className="w-8 h-8 md:w-12 md:h-12" />
          <span>DEPARTURES</span>
        </div>
        <div className="flex items-center gap-2 text-xl md:text-2xl text-amber-500 bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800">
          <Clock className="w-6 h-6" />
          {now.toFormat("HH:mm:ss")}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[400px] border-separate border-spacing-y-2">
          <thead>
            <tr className="text-neutral-500 text-sm md:text-base">
              <th className="pb-2 font-normal w-24">TIME</th>
              <th className="pb-2 font-normal px-4 w-20">LINE</th>
              <th className="pb-2 font-normal">DESTINATION</th>
            </tr>
          </thead>
          <tbody>
            {displayDepartures.length > 0 ? (
              displayDepartures.map((dep, idx) => (
                <tr
                  key={idx}
                  className="bg-neutral-900/50 hover:bg-neutral-800 transition-colors"
                >
                  <td className="py-3 text-xl md:text-2xl font-bold tabular-nums align-top">
                    {dep.timeInfo.toFormat("HH:mm")}
                  </td>
                  <td className="py-3 px-4 align-top">
                    <span
                      className={classNames(
                        "inline-flex items-center justify-center w-8 h-8 rounded-full text-black font-bold text-lg text-white",
                        {
                          "bg-orange-700 text-white": dep.line === "1",
                          "bg-blue-500 text-white": dep.line === "2",
                          "bg-[#00a859]": dep.line === "3", // closest green to match pop bus colors
                          "bg-yellow-400": dep.line === "4",
                          "bg-purple-600 text-white": dep.line === "5",
                        },
                      )}
                    >
                      {dep.line}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex flex-col gap-2">
                      <div className="text-sm md:text-lg text-neutral-300">
                        {dep.path}
                      </div>

                      {/* Remarks on a new line */}
                      {dep.notes || dep.isLastBus ? (
                        <div className="flex flex-wrap items-center gap-2">
                          {dep.isLastBus && (
                            <span className="text-red-500 text-xs md:text-sm border border-red-500/50 px-2 py-0.5 rounded bg-red-500/10 animate-pulse font-semibold whitespace-nowrap">
                              LAST BUS
                            </span>
                          )}
                          {dep.notes && (
                            <span className="text-blue-400 text-xs md:text-sm">
                              {dep.notes}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="h-[1lh]"></div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="py-12 text-center text-xl text-neutral-600 border-t border-neutral-800"
                >
                  {dayType === "Sunday"
                    ? "NO SERVICE ON SUNDAYS"
                    : "NO MORE DEPARTURES TODAY"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
