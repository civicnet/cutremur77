import {
  CONTROLS_PLAY,
  CONTROLS_PAUSE,
  CONTROLS_INC_TICK,
  UIState,
  UIActionTypes,
  CONTROLS_STOP
} from "./types";

const initialState: UIState = {
  isPlaying: false,
  tick: 0
};

export function UIReducer(
  state = initialState,
  action: UIActionTypes
): UIState {
  switch (action.type) {
    case CONTROLS_PLAY:
      return {
        ...state,
        isPlaying: true
      };
    case CONTROLS_PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case CONTROLS_STOP:
      return {
        ...state,
        isPlaying: false,
        tick: 0
      };
    case CONTROLS_INC_TICK:
      return {
        ...state,
        tick: state.tick + 1
      };
    default:
      return state;
  }
}
