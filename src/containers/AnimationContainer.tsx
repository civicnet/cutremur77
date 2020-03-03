import React from "react";
import { makeStyles } from "@material-ui/core";
import { QuakeMap } from "../components/QuakeMap";
import { Timeline } from "../components/Timeline";

const useStyles = makeStyles(theme => ({}));

const Atlas: React.FC = () => {
  const classes = useStyles();

  const [animationFrame, setAnimationFrame] = React.useState(0);

  return (
    <div className="App">
      <QuakeMap animationFrame={animationFrame} />
      <Timeline onAnimationFrame={setAnimationFrame} />
    </div>
  );
};

export default Atlas;
