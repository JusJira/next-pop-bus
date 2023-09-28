"use client";

import React from "react";
import moment from "moment";
import { DateTime } from "luxon";

function Clock() {
  var now = DateTime.now();
  return <span className="text-lg">Last Updated: {now.toFormat("HH:mm").toString()}</span>;
}

export default Clock;
