import classNames from "classnames";
import { Frown } from "lucide-react";
import { DateTime } from "luxon";


function TimeBox(props: { time: string[] }) {
  var now = DateTime.local({ zone: "utc" }).setZone('Asia/Bangkok');
  var next = props.time
    .map(function (s) {
      return DateTime.fromFormat(s, "HH:mm",{ zone: "Asia/Bangkok" });
    })
    .sort(function (m) {
      return m.valueOf();
    })
    .find(function (m) {
      return m > now;
    });

  var ctime = props.time.map(function (s) {
    return DateTime.fromFormat(s, "HH:mm" ,{ zone: "Asia/Bangkok" });
  });
  if (next) {
    return (
      <div className="flex w-full flex-row items-center justify-center">
        <div className="grid-container w-full m-auto">
        {ctime.map((time, index) => (
          <div
            key={index}
            className={classNames({
              "outline outline-1 outline-white w-16 text-center p-1 rounded-sm":
                true,
              "!bg-neutral-900 text-gray-600 outline-gray-500": time < now
              ,
              "bg-green-400": time.valueOf() === next?.valueOf(),
            })}
          >
            {time.toFormat("H:mm").toString()}
            {/* {next?.format('HH:mm').toString()} */}
          </div>
        ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="flex text gap-3 text-2xl items-center">
        รถหมดแล้ว <Frown />
      </div>
    </div>
  );
}

export default TimeBox;
