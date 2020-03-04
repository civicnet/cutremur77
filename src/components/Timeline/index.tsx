import React from "react";
import Paper from "@material-ui/core/Paper";
import PlayArrowIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PauseIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import {
  IconButton,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  CardContent,
  Card
} from "@material-ui/core";
import { LineChart } from "../LineChart";
import { Slider } from "../Slider";
import {
  controlsPlay,
  controlsPause,
  controlsStop,
  controlsIncrementTick
} from "../../store/ui/actions";
import { AppState } from "../../store";
import { UIState, TICK_DURATION } from "../../store/ui/types";
import { connect } from "react-redux";
import ReactSound from "react-sound";
// import audio from 'audio.mp3';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      background: "#5B554D",
      width: "60vw",
      bottom: 20,
      left: "20vw",
      padding: 8,
      paddingRight: 20
    },
    timelineContents: {
      display: "flex",
      flex: 1,
      height: 84
    },
    title: {
      color: "#38342F",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 12,
      marginBottom: 12,
      textTransform: "uppercase"
    },
    debug: {
      position: "absolute",
      bottom: 20,
      left: 20,
      textAlign: "left",
      minWidth: 200,
      minHeight: 100
    },
    controls: {
      height: "100%",
      alignSelf: "center",
      justifySelf: "center",
      minWidth: 80,
      position: "relative"
    },
    clock: {
      fontSize: 12,
      fontWeight: "bold",
      position: "absolute",
      width: "100%",
      bottom: -4
    }
  })
);

const FRAME_DURATION = TICK_DURATION; // 1000 / FPS;
export const TOTAL_DURATION = 80;

const mapStateToProps = (state: AppState) => ({
  ui: state.ui
});

const mapDispatchToProps = (dispatch: any) => ({
  play: () => dispatch(controlsPlay()),
  pause: () => dispatch(controlsPause()),
  stop: () => dispatch(controlsStop()),
  incrementTick: () => dispatch(controlsIncrementTick())
});

interface Props {
  ui: UIState;
  play: typeof controlsPlay;
  pause: typeof controlsPause;
  stop: typeof controlsStop;
  incrementTick: typeof controlsIncrementTick;
  onAnimationFrame: (n: number) => void;
}

export const ConnectedTimeline: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [animationFrame, setAnimationFrame] = React.useState(600);
  const [soundStartPosition, setSoundStartPosition] = React.useState(0);

  //
  React.useEffect(() => {
    props.onAnimationFrame(animationFrame);

    let interval: any = null;
    if (props.ui.isPlaying) {
      interval = setInterval(() => {
        setAnimationFrame(animationFrame + 4);

        if (animationFrame * FRAME_DURATION >= TOTAL_DURATION) {
          props.pause();
        }
      }, /* FRAME_DURATION * 1000 */ 20);
    } else if (!props.ui.isPlaying && animationFrame !== 0 && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  const onAnimationPlayback = () => {
    !props.ui.isPlaying ? props.play() : props.pause();
  };

  const timeElapsed = animationFrame * FRAME_DURATION;
  const percentDone = (timeElapsed * 100) / TOTAL_DURATION;

  const accelDataWidth = (47 * 100) / TOTAL_DURATION;
  const accelDataPadding = (33 * 100) / TOTAL_DURATION;

  const soundLength = (26 * 100) / TOTAL_DURATION;
  const soundPadding = (42 * 100) / TOTAL_DURATION;

  const soundProgressSeconds = percentDone - soundPadding;
  // console.log(soundProgressSeconds);
  const isSoundPlaying =
    soundProgressSeconds > 0 && soundProgressSeconds < 26 && props.ui.isPlaying;
  // const soundProgressMs = soundProgressSeconds * TOTAL_DURATION * 1000;

  const clock = new Date("1977-03-04 21:20:26");
  clock.setSeconds(clock.getSeconds() + timeElapsed);

  const jumpToTime = (time: number) => {
    // setSoundStartPosition(soundProgressPercentage > 0 && soundProgressPercentage < 100 ? soundProgressMs : 0);

    if (props.ui.isPlaying) {
      props.pause();
    }
    setAnimationFrame(time / FRAME_DURATION);
    props.onAnimationFrame(animationFrame);
  };

  return (
    <>
      {/* <Card className={classes.debug}>
        <CardContent>
          <Typography variant="body2" component="p">
            Frame #: <strong>{animationFrame}</strong>
          </Typography>
          <Typography variant="body2" component="p">
            Time : <strong>{timeElapsed.toLocaleString("ro-RO")} sec</strong>
          </Typography>
        </CardContent>
      </Card> */}
      <Paper className={classes.root} style={{}}>
        <Typography component="h3" className={classes.title}>
          Propagare seism 1977
        </Typography>
        <div className={classes.timelineContents}>
          <div className={classes.controls}>
            <IconButton aria-label="playback" onClick={onAnimationPlayback}>
              {!props.ui.isPlaying ? (
                <PlayArrowIcon fontSize="large" htmlColor="#eceac7" />
              ) : (
                <PauseIcon fontSize="large" htmlColor="#eceac7" />
              )}
            </IconButton>
            <Typography className={classes.clock}>
              {clock.getHours()}:{clock.getMinutes()}:{" "}
              <Typography
                style={{ color: "#fff", fontSize: 12 }}
                component="span"
              >
                {clock.getSeconds()}
              </Typography>
            </Typography>
          </div>
          <Slider
            progress={percentDone}
            timeElapsed={timeElapsed}
            jumpToTime={jumpToTime}
          >
            <div>
              <LineChart
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${accelDataPadding}%`,
                  width: `${accelDataWidth}%`
                }}
              />
              <div
                style={{
                  height: 2,
                  background: "#fff",
                  width: `${soundLength}%`,
                  left: `${soundPadding}%`,
                  position: "absolute"
                }}
              >
                <ReactSound
                  url={process.env.PUBLIC_URL + "/data/audio.mp3"}
                  playStatus={isSoundPlaying ? "PLAYING" : "PAUSED"}
                  autoLoad={true}
                  loop={false}
                  volume={20}
                  playFromPosition={
                    isSoundPlaying ? undefined : soundProgressSeconds * 1000
                  }
                />
              </div>
            </div>
          </Slider>
        </div>
      </Paper>
    </>
  );
};

export const Timeline = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTimeline);
