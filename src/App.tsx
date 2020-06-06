import React from "react";
import WeatherPageComponent from "./components/WeatherComponent/WeatherPageComponent";
import { Container, Typography, CardContent } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import { WeatherInfoComponent } from "./components/WeatherComponent/WeatherInfoComponent";
import { Navbar } from "./components/Navbar";
import { withNamespaces } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Container component="main" className={classes.main} maxWidth="sm">
        <WeatherPageComponent />
      </Container>
    </div>
  );
}

export default withNamespaces()(App);
