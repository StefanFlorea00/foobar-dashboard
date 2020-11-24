import React from "react";

import "./QueueTime.css";

export default function QueueTime(props) {
  return <div className="queue">{props.queue ? props.queue : "Loading..."} In queue</div>;
}
