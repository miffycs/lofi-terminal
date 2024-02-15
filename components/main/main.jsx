import "terminal.css";
import classes from "./main.module.css";

import SongBar from "../songBar/songBar";
import Terminal from "../terminal/terminal";

export default function Main() {
  return (
    <div className={classes.main}>
      <Terminal />
      <SongBar />
    </div>
  );
}
