import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import MouseEventHandler from "../../lib/MouseEventHandler";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 2,
      height: "100%",
      background: "#fff",
      position: "absolute",
      zIndex: 100
    },
    topNotch: {
      position: "absolute",
      top: 0,
      left: -9,
      width: 0,
      height: 0,
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderTop: "10px solid #fff"
    },
    bottomNotch: {
      position: "absolute",
      bottom: 0,
      left: -9,
      width: 0,
      height: 0,
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderBottom: "10px solid #fff"
    }
  })
);

interface Props {
  progress: number;
}

export const SliderHandle: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ left: `calc(${props.progress}% - 3px)` }}
    >
      <div className={classes.topNotch} />
      <div className={classes.bottomNotch} />
    </div>
  );
};
