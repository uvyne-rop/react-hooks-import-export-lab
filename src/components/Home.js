import React from "react";
import {username ,city } from "../data/user"

function Home() {
  return (
    <div id="home">

      <h1 style={{ color:"firebrick"}}>
      Your {username} is a Web Developer from Your {city}
      </h1>
    </div>
  );
}
export default Home;
