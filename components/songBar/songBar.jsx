import classes from "./songBar.module.css";

export default function SongBar() {
  return (
    <div className={classes.songBar}>
      <div className={classes.left}>
        <p>Currently Playing: Song Title</p>
        <p className={classes.bottom}>Artist</p>
      </div>

      <div className={classes.right}>
        <p className={classes.bottom}>Controls Here</p>
      </div>
    </div>
  );
}
