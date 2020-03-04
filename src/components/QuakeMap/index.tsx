import React, { useEffect } from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";

import { AppState } from "../../store";
import { fetchWave } from "../../store/data/actions";
import { connect } from "react-redux";
import { DataState, WaveType } from "../../store/data/types";
import { TICK_DURATION } from "../../store/ui/types";
import * as d3 from "d3-ease";

/* const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 3,
      height: "100%",
      background: "#fff",
      position: "absolute"
    }
  })
); */

const mapStateToProps = (state: AppState) => ({
  data: state.data
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchWaveAction: () => dispatch(fetchWave())
});

const initialViewState = {
  width: window.innerWidth,
  height: window.innerHeight,
  longitude: 23.5602928,
  latitude: 46.0291793,
  zoom: 6,
  maxZoom: 20,
  minZoom: 1,
  bearing: 0,
  pitch: 0
};

interface Props {
  data: DataState;
  fetchWaveAction: typeof fetchWave;
  animationFrame: number;
}

export const ConnectedQuakeMap: React.FC<Props> = (props: Props) => {
  // const classes = useStyles();

  const { fetchWaveAction } = props;
  useEffect(() => {
    fetchWaveAction();
  }, [fetchWaveAction]);

  const elapsedSeconds = props.animationFrame * TICK_DURATION;
  // console.log('yy', elapsedSeconds)

  const pWaveLayer = new GeoJsonLayer({
    id: "p-geojson-layer",
    data: props.data.waves[WaveType.P],
    pickable: false,
    stroked: true,
    filled: false,
    // lineWidthScale: 200,
    lineWidthMinPixels: 1,
    getLineColor: (d: any) => {
      let opacity =
        d.properties["Sec_P"] < elapsedSeconds &&
        d.properties["Sec_P"] > elapsedSeconds - 2
          ? 255
          : 0;

      if (d.properties["Sec_P"] < elapsedSeconds - 2) {
        opacity = 30;
      }

      if (d.properties["Sec_P"] < elapsedSeconds - 20) {
        opacity = 10;
      }

      return [200, 160, 80, opacity];
    },
    lineWidthUnits: "pixels",
    getLineWidth: (d: any) => {
      return d.properties["Sec_P"] < elapsedSeconds &&
        d.properties["Sec_P"] > elapsedSeconds - 2
        ? 2
        : 1;
    },
    updateTriggers: {
      getLineColor: [elapsedSeconds],
      getLineWidth: [elapsedSeconds]
    },
    transitions: {
      getLineColor: {
        duration: 500,
        easing: d3.easeLinear,
        enter: (value: any) => [value[0], value[1], value[2], 0] // fade in
      }
    }
  });

  const sWaveLayer = new GeoJsonLayer({
    id: "s-geojson-layer",
    data: props.data.waves[WaveType.S],
    pickable: false,
    stroked: true,
    filled: false,
    // lineWidthScale: 200,
    lineWidthMinPixels: 1,
    getLineColor: (d: any) => {
      let opacity =
        d.properties["Sec_S"] < elapsedSeconds &&
        d.properties["Sec_S"] > elapsedSeconds - 2
          ? 255
          : 0;

      if (d.properties["Sec_S"] < elapsedSeconds - 2) {
        opacity = 30;
      }

      if (d.properties["Sec_S"] < elapsedSeconds - 20) {
        opacity = 10;
      }

      return [200, 80, 80, opacity];
    },
    lineWidthUnits: "pixels",
    getLineWidth: (d: any) => {
      return d.properties["Sec_S"] < elapsedSeconds &&
        d.properties["Sec_S"] > elapsedSeconds - 2
        ? 2
        : 1;
    },
    updateTriggers: {
      getLineColor: [elapsedSeconds],
      getLineWidth: [elapsedSeconds]
    },
    transitions: {
      getLineColor: {
        duration: 500,
        easing: d3.easeLinear,
        enter: (value: any) => [value[0], value[1], value[2], 0] // fade in
      }
    }
  });

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={[pWaveLayer, sWaveLayer]}
    >
      <StaticMap
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/claudiuc/ck7cg1f360fpu1jnkdksbg2xx/draft"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    </DeckGL>
  );
};

export const QuakeMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedQuakeMap);
