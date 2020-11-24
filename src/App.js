import React, { useState, useEffect } from "react";

import { _GET } from "./db/Db";
import QueueTime from "./components/QueueTime";

import "./App.css";

_GET();

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  if (data.queue != null) console.log(data.queue.length);

  useEffect(() => {
    _GET(setData);
    setInterval(() => {
      _GET(setData);
    }, 10000);
  }, []);

  return (
    <div className="App">
      <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
