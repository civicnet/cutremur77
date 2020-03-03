import {
  CONTROLS_PLAY,
  ControlsPlayAction,
  CONTROLS_PAUSE,
  CONTROLS_STOP,
  CONTROLS_INC_TICK,
  ControlsPauseAction,
  ControlsStopAction,
  ControlsIncrementTickAction
} from "./types";

export function controlsPlay(): ControlsPlayAction {
  return {
    type: CONTROLS_PLAY
  };
}

export function controlsPause(): ControlsPauseAction {
  return {
    type: CONTROLS_PAUSE
  };
}

export function controlsStop(): ControlsStopAction {
  return {
    type: CONTROLS_STOP
  };
}

export function controlsIncrementTick(): ControlsIncrementTickAction {
  return {
    type: CONTROLS_INC_TICK
  };
}
