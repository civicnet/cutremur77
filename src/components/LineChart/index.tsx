import React, { useEffect } from "react";

import { VictoryLine, VictoryContainer } from "victory";
import { AccelerationDirection, DataState } from "../../store/data/types";
import { AppState } from "../../store";
import { fetchAcceleration } from "../../store/data/actions";
import { connect } from "react-redux";

const accelColors = {
  [AccelerationDirection.EW]: "#c43a31",
  [AccelerationDirection.NS]: "#eceac7",
  [AccelerationDirection.Z]: "#c0978d"
};

const mapStateToProps = (state: AppState) => ({
  data: state.data
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchAccelerationAction: () => dispatch(fetchAcceleration())
});

interface Props {
  data: DataState;
  fetchAccelerationAction: typeof fetchAcceleration;
  style?: React.CSSProperties;
}

const ConnectedLineChart: React.FC<Props> = props => {
  const { fetchAccelerationAction } = props;
  useEffect(() => {
    fetchAccelerationAction();
  }, [fetchAccelerationAction]);

  if (
    !props.data.acceleration.EW.size ||
    !props.data.acceleration.NS.size ||
    !props.data.acceleration.Z.size
  ) {
    return null;
  }

  return (
    <div style={{ ...props.style, flexDirection: "column" }}>
      {Object.keys(props.data.acceleration).map((key, idx) => (
        <div>
          <span
            style={{
              position: "absolute",
              top: idx * 20,
              left: "-70%",
              fontSize: 12,
              color: accelColors[key as AccelerationDirection],
              pointerEvents: "none"
            }}
          >
            Accelerație {key} (cm/s<sup>2</sup>)
          </span>
          <VictoryLine
            key={key}
            height={25}
            width={400}
            data={props.data.acceleration[key as AccelerationDirection].toJS()}
            containerComponent={
              <VictoryContainer responsive={true} height={25} />
            }
            padding={0}
            style={{
              data: {
                stroke: accelColors[key as AccelerationDirection],
                strokeWidth: 1.5
              },
              parent: {
                position: "absolute",
                top: idx * 20,
                zIndex: 3 - idx
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export const LineChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLineChart);
