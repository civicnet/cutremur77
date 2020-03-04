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
  // useTheme,
  Button,
  makeStyles,
  Typography,
  Icon
} from "@material-ui/core";
import clsx from "clsx";

import { withRouter, RouteComponentProps, Route, Link } from "react-router-dom";
import { loadCSS } from "fg-loadcss";
import routes from "./routes";

import { ReactComponent as LogoINFP } from "./logo_simbol_INFP.svg";
import { ReactComponent as LogoCivicNet } from "./Logo_simbol_CivicNet.svg";
import { ReactComponent as LogoCutremurSymbol } from "./Logo_Cutremur_Simbol.svg";
import { ReactComponent as LogoCutremurFull } from "./Logo_Cutremur_Full.svg";

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
    textAlign: "left",
    pointerEvents: "none"
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
  },
  toggleButton: {
    position: "absolute",
    right: 35,
    top: 35,
    width: 120,
    height: 120,
    borderRadius: "50%",
    zIndex: 100,
    background: "#5C574D",
    border: "1px solid #9C9489",
    color: "#9C9489"
  },
  toggleButtonLabel: {
    flexDirection: "column"
  },
  toggleButtonText: {
    lineHeight: 1,
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold"
  },
  logo: {
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
    display: "block"
  }
}));

const App: React.FC<RouteComponentProps> = props => {
  const [animationFrame, setAnimationFrame] = React.useState(0);

  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
          <Button
            component="a"
            onClick={toggleDrawer}
            /* href="https://civicnet.ro" */
            style={{ display: "flex", flex: 1, justifyContent: "center" }}
          >
            {!isDrawerOpen ? <LogoCutremurSymbol /> : <LogoCutremurFull />}
          </Button>
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
        <div style={{ position: "absolute", bottom: 20, width: "100%" }}>
          <a className={classes.logo} href="http://www.infp.ro/">
            <LogoINFP />
          </a>
          <a className={classes.logo} href="https://civicnet.ro">
            <LogoCivicNet />
          </a>
        </div>
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

          <Button
            variant="contained"
            color="inherit"
            disableElevation
            classes={{
              label: classes.toggleButtonLabel,
              root: classes.toggleButton
            }}
          >
            <Icon
              className="fas fa-map-marked-alt"
              style={{ display: "block" }}
            />
            <div className={classes.toggleButtonText}>Vezi hărți</div>
          </Button>
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
