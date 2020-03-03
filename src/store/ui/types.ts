export const TICK_DURATION = 0.05; // seconds

export interface UIState {
  isPlaying: boolean;
  tick: number;
}

export const CONTROLS_PLAY = "CONTROLS_PLAY";
export const CONTROLS_PAUSE = "CONTROLS_PAUSE";
export const CONTROLS_STOP = "CONTROLS_STOP";
export const CONTROLS_INC_TICK = "CONTROLS_INC_TICK";

export interface ControlsPlayAction {
  type: typeof CONTROLS_PLAY;
}

export interface ControlsPauseAction {
  type: typeof CONTROLS_PAUSE;
}

export interface ControlsStopAction {
  type: typeof CONTROLS_STOP;
}

export interface ControlsIncrementTickAction {
  type: typeof CONTROLS_INC_TICK;
}

export type UIActionTypes =
  | ControlsPlayAction
  | ControlsPauseAction
  | ControlsStopAction
  | ControlsIncrementTickAction;
