import { DateTime } from "luxon";

function Clock() {
  var now = DateTime.local()
    .setZone("Asia/Bangkok")
    .toFormat("HH:mm")
    .toString();

  return <span className="text-lg">Last Updated: {now}</span>;
}

export default Clock;
