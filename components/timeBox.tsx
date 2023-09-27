import moment, { Moment } from "moment";
import classNames from "classnames";
import { Frown } from "lucide-react";

function TimeBox(props: { time: string[]; now: Moment }) {
  var next = props.time
    .map(function (s) {
      return moment(s, "HH:mm");
    })
    .sort(function (m) {
      return m.valueOf();
    })
    .find(function (m) {
      return m.isAfter();
    });

  var ctime = props.time.map(function (s) {
    return moment(s, "HH:mm");
  });
  console.log(next, "Next");
  console.log(props.now);
  if (next) {
    return (
      <div className="flex w-full flex-row flex-wrap gap-2">
        {ctime.map((time, index) => (
          <div
            key={index}
            className={classNames({
              "outline outline-1 outline-white w-16 text-center p-1 rounded-sm":
                true,
              "!bg-neutral-900 text-gray-600 outline-gray-500": time.isBefore(
                props.now
              ),
              "bg-green-400": time.isSame(next),
            })}
          >
            {time.format("HH:mm")}
            {/* {next?.format('HH:mm').toString()} */}
          </div>
        ))}
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
