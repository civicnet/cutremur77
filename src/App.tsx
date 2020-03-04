import React from "react";
import "./App.css";
import { Timeline } from "./components/Timeline";
import { QuakeMap } from "./components/QuakeMap";
import {
  CssBaseline,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  useTheme,
  makeStyles,
  Button,
  Typography
} from "@material-ui/core";
import clsx from "clsx";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { withRouter, RouteComponentProps, Route, Link } from "react-router-dom";
import { loadCSS } from "fg-loadcss";
import routes from "./routes";
const drawerWidth = 240;
export const APP_BAR_COLOR = "#222f3e";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerPaper: {
    // backgroundColor: APP_BAR_COLOR,
    background: "#1E1515"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  grow: {
    flexGrow: 1
  },
  menuItem: {
    // color: "#FFF",
    // fontWeight: "bold",
    // opacity: 0.7,
    color: "#FCF1E4"
  },
  infoPanel: {
    position: "absolute",
    left: 110,
    top: 35,
    width: 260,
    zIndex: 100,
    color: "#AFA294",
    textAlign: "left"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  title: {
    fontFamily: "'Roboto Condensed', Roboto, sans-serif",
    fontWeight: 700,
    fontSize: "3.5em",
    lineHeight: 0.9
  },
  subtitle: {
    fontWeight: 300,
    fontSize: "1.5em",
    paddingBottom: 10,
    marginBottom: 20,
    borderBottom: "1px solid #6B655D",
    letterSpacing: 2
  },
  metadata: {
    fontWeight: 300
  },
  stats: {
    marginTop: 40
  },
  statLabel: {
    marginBottom: 20,
    fontWeight: 300
  },
  statValue: {
    color: "#CC3333",
    fontSize: "3em",
    lineHeight: 0.9,
    fontWeight: 700
  }
}));

const App: React.FC<RouteComponentProps> = props => {
  const [animationFrame, setAnimationFrame] = React.useState(0);

  const classes = useStyles();
  const theme = useTheme();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    isDrawerOpen ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
  };

  React.useEffect(() => {
    loadCSS(
      "https://pro.fontawesome.com/releases/v5.10.1/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen
        })}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen
          })
        }}
      >
        <div className={classes.toolbar}>
          <a
            onClick={toggleDrawer}
            /* href="https://civicnet.ro" */
            style={{ display: "flex", flex: 1, justifyContent: "center" }}
          >
            {!isDrawerOpen ? (
              <img
                src="Logo_Cutremur_Simbol.svg"
                style={{ height: 32 }}
                alt="CivicNet Logo"
              />
            ) : (
              <img
                src="Logo_Cutremur_Full.svg"
                style={{ height: 32 }}
                alt="CivicNet Logo"
              />
            )}
          </a>
          {/* <IconButton onClick={toggleDrawer}>
            {!isDrawerOpen ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
        </div>
        <Divider />
        <List>
          {routes.map(route => (
            <ListItem
              button
              key={route.text}
              component={Link}
              to={route.path}
              className={classes.menuItem}
              selected={props.location.pathname === route.path}
            >
              <ListItemIcon
                style={{ marginLeft: 12 }}
                className={classes.menuItem}
              >
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <div className="App">
          <div className={classes.infoPanel}>
            <Typography className={classes.title} component="h1">
              Cutremur
            </Typography>
            <Typography className={classes.subtitle} component="h2">
              4 martie 1977
            </Typography>
            <Typography className={classes.metadata}>
              <strong>Vrancea</strong> - zona seismică
            </Typography>
            <Typography className={classes.metadata}>
              <strong>7.4 Mw</strong> - magnitudine
            </Typography>
            <Typography className={classes.metadata}>
              <strong>94 km</strong> - adâncime
            </Typography>
            <Typography className={classes.metadata}>
              <strong>21:21</strong> - ora locală
            </Typography>

            <div className={classes.stats}>
              <Typography className={classes.statValue}>1.578</Typography>
              <Typography className={classes.statLabel}>decedați</Typography>
              <Typography className={classes.statValue}>11.321</Typography>
              <Typography className={classes.statLabel}>răniți</Typography>
              <Typography className={classes.statValue}>32.897</Typography>
              <Typography className={classes.statLabel}>
                clădiri avariate
              </Typography>
              <Typography className={classes.statValue}>2 MLD $</Typography>
              <Typography className={classes.statLabel}>
                impact economic
              </Typography>
            </div>
          </div>
          <QuakeMap animationFrame={animationFrame} />
          <Timeline onAnimationFrame={setAnimationFrame} />
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </main>
    </>
  );
};

export default withRouter(App);
