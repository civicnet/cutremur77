import { OrderedSet } from "immutable";

export enum AccelerationDirection {
  EW = "EW",
  NS = "NS",
  Z = "Z"
}

export enum WaveType {
  P = "P",
  S = "S"
}

export type AccelerationValues = OrderedSet<number>;
export type AccelerationData = {
  [TKey in AccelerationDirection]: AccelerationValues;
};

export type WaveTravelTimeData = {
  [TKey in WaveType]: any;
};

export interface DataState {
  acceleration: AccelerationData;
  waves: WaveTravelTimeData;
}

export const FETCH_ACCELERATION = "FETCH_ACCELERATION";
export const RECEIVE_ACCELERATION = "RECEIVE_ACCELERATION";

export const FETCH_WAVE = "FETCH_WAVE";
export const RECEIVE_WAVE = "RECEIVE_WAVE";

export interface FetchAccelerationAction {
  type: typeof FETCH_ACCELERATION;
}

export interface ReceiveAccelerationAction {
  type: typeof RECEIVE_ACCELERATION;
  direction: AccelerationDirection;
  values: AccelerationValues;
}

export interface FetchWaveAction {
  type: typeof FETCH_WAVE;
}

export interface ReceiveWaveAction {
  type: typeof RECEIVE_WAVE;
  waveType: WaveType;
  waveData: any;
}

export type DataActionTypes =
  | FetchAccelerationAction
  | ReceiveAccelerationAction
  | FetchWaveAction
  | ReceiveWaveAction;
