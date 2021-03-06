import React from "react";
import { Icon } from "@material-ui/core";
// import About from "../containers/AnimationContainer";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => null,
    icon: <Icon className="fal fa-home" fontSize="small" />,
    text: "Atlas"
  },
  {
    path: "/",
    main: () => <div>Despre</div>,
    icon: <Icon className="fal fa-question-circle" fontSize="small" />,
    text: "Ghid"
  },
  {
    path: "/",
    main: () => <div>Change</div>,
    icon: <Icon className="fal fa-layer-group" fontSize="small" />,
    text: "Seturi de date"
  },
  {
    path: "/",
    main: () => <div>Change</div>,
    icon: <Icon className="fal fa-info-circle" fontSize="small" />,
    text: "Despre"
  },
  {
    path: "/",
    main: () => <div>Change</div>,
    icon: <Icon className="fal fa-at" fontSize="small" />,
    text: "Contact"
  }
];

export default routes;
