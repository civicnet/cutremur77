import {
  DataState,
  AccelerationDirection,
  ReceiveAccelerationAction,
  AccelerationValues,
  RECEIVE_ACCELERATION,
  WaveType,
  RECEIVE_WAVE,
  ReceiveWaveAction
} from "./types";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import oboe from "oboe";
import { OrderedSet } from "immutable";

const getJsonPath = (file: string) =>
  `https://cdn.jsdelivr.net/gh/civicnet/cutremur77@latest/public/data/${file}`;

export function receiveAcceleration(
  direction: AccelerationDirection,
  values: AccelerationValues
): ReceiveAccelerationAction {
  return {
    type: RECEIVE_ACCELERATION,
    direction,
    values
  };
}

export const fetchAcceleration = (): ThunkAction<
  void,
  DataState,
  null,
  Action<string>
> => async (dispatch, getState) => {
  if (getState().acceleration) {
    return Promise.resolve();
  }

  Object.keys(AccelerationDirection).forEach(key => {
    let count = 0;
    oboe(getJsonPath(`${key.toLocaleLowerCase()}_min.json`))
      .node("!.*", (val: any) => {
        // Only consider every 10th value (each tick is 0.005sec)
        if (count === 10) {
          count = 0;
          return val;
        }
        count++;
        return oboe.drop;
      })
      .done((data: [any]) => {
        const values = data
          .map((val: any) => {
            return val[key.toLowerCase()];
          })
          .filter(val => !!val);

        dispatch(
          receiveAcceleration(key as AccelerationDirection, OrderedSet(values))
        );
      });
  });
};

export function receiveWave(
  waveType: WaveType,
  waveData: any
): ReceiveWaveAction {
  return {
    type: RECEIVE_WAVE,
    waveType,
    waveData
  };
}

export const fetchWave = (): ThunkAction<
  void,
  DataState,
  null,
  Action<string>
> => async (dispatch, getState) => {
  if (getState().waves) {
    return Promise.resolve();
  }

  oboe(getJsonPath(`travel_time_p.geojson`)).done(data => {
    dispatch(receiveWave(WaveType.P, data));
  });

  oboe(getJsonPath(`travel_time_s.geojson`)).done(data => {
    dispatch(receiveWave(WaveType.S, data));
  });
};
