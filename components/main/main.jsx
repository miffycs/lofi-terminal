import "terminal.css";
import classes from "./main.module.css";

import Terminal from "../terminal/terminal";
import SongBar from "../songBar/songBar";
import getSongs from "../songBar/utils/getSongs";

const allSongs = getSongs();

export default function Main() {
  return (
    <div className={classes.main}>
      <Terminal />
      <SongBar songs={allSongs} />
    </div>
  );
}
