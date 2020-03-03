import {
  DataState,
  AccelerationDirection,
  DataActionTypes,
  RECEIVE_ACCELERATION,
  WaveType,
  RECEIVE_WAVE
} from "./types";
import { OrderedSet } from "immutable";

const initialState: DataState = {
  acceleration: {
    [AccelerationDirection.EW]: OrderedSet(),
    [AccelerationDirection.NS]: OrderedSet(),
    [AccelerationDirection.Z]: OrderedSet()
  },
  waves: {
    [WaveType.S]: null,
    [WaveType.P]: null
  }
};

export function DataReducer(
  state = initialState,
  action: DataActionTypes
): DataState {
  switch (action.type) {
    case RECEIVE_ACCELERATION:
      return {
        ...state,
        acceleration: {
          ...state.acceleration,
          [action.direction]: action.values
        }
      };
    case RECEIVE_WAVE:
      return {
        ...state,
        waves: {
          ...state.waves,
          [action.waveType]: action.waveData
        }
      };
    default:
      return state;
  }
}
