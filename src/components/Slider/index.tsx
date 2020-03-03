import React from "react";
import clsx from "clsx";
import { SliderHandle } from "./SliderHandle";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { TOTAL_DURATION } from "../Timeline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      position: "relative"
    },
    bar: {
      // background: '#f00',
      flex: 1,
      height: 20,
      alignSelf: "flex-end",
      // marginBottom: 20,
      borderTop: "2px dashed #3A3630",
      flexDirection: "row",
      justifyContent: "space-between",
      display: "flex",
      paddingTop: 4
    },
    barLabels: {
      // display: 'flex',
      display: "inline-block",
      color: "#fff",
      fontSize: 12,
      opacity: 0.7
    },
    barLabelsUnit: {
      fontSize: 10
    },
    activeBarLabel: {
      fontWeight: "bold",
      opacity: 1
    }
  })
);

interface Props {
  progress: number;
  children?: React.ReactElement;
  timeElapsed: number;
}

export const Slider: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
      <div className={classes.bar}>
        {Array.from(Array(TOTAL_DURATION / 10 + 1).keys()).map(idx => {
          const labelVal = idx * 10;
          return (
            <Typography
              className={clsx(
                classes.barLabels,
                labelVal < props.timeElapsed ? classes.activeBarLabel : null
              )}
              component="span"
            >
              {labelVal || "00"}
              <Typography className={classes.barLabelsUnit} component="span">
                S
              </Typography>
            </Typography>
          );
        })}
      </div>
      <SliderHandle progress={props.progress} />
    </div>
  );
};
