"use client";

import React from "react";
import { DateTime } from "luxon";

function Clock() {
  var now = DateTime.now().setZone('Asia/Bangkok');
  return <span className="text-lg">Last Updated: {now.toFormat("HH:mm").toString()}</span>;
}

export default Clock;
