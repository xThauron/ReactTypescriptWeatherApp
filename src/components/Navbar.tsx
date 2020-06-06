/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { Trans } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import i18n from "../i18n";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  langButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Trans>Check your weather!</Trans>
        </Typography>

        {i18n.language === "pl" && (
          <IconButton
            edge="end"
            className={classes.langButton}
            color="inherit"
            aria-label="menu"
            onClick={() => changeLanguage("en")}
          >
            <ReactCountryFlag countryCode="GB" />
          </IconButton>
        )}

        {i18n.language === "en" && (
          <IconButton
            edge="end"
            className={classes.langButton}
            color="inherit"
            aria-label="menu"
            onClick={() => changeLanguage("pl")}
          >
            <ReactCountryFlag countryCode="PL" />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};
