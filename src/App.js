import React, { useState, useEffect } from "react";

import { _GET } from "./db/Db";
import QueueTime from "./components/QueueTime";
import bar from "./assets/bar.jpg";

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
      <div className="header">
        <img src={bar} alt="header picture" />
      </div>
      <div className="sidebar">this is a sidebar with content</div>

      {/* number of people in queue */}
      <section>
        <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      </section>

      {/* time to bar closes */}
      <section>
        <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      </section>

      {/* customers being served */}
      <section>
        <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      </section>

      {/* bartenders */}
      <section>
        <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      </section>

      {/* taps */}
      <section>
        <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      </section>

      {/* storage */}
      <section>
        <QueueTime queue={data.queue ? data.queue.length : "0"}></QueueTime>
      </section>

      <div className="footer"> this is a footer with some information</div>
    </div>



  );
}

export default App;
