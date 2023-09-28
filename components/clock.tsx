"use client";

import dynamic from 'next/dynamic'

import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

function Clock() {
  var now = DateTime.local()
    .setZone("Asia/Bangkok")
    .toFormat("HH:mm")
    .toString();
  const [time, setTime] = useState("");
  useEffect(() => setTime(now), [now]);

  return <span className="text-lg">Last Updated: {time}</span>;
}

export default Clock;
