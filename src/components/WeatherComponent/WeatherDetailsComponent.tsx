import React from "react";
import { Weather } from "../../models/weather";
import {
  makeStyles,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@material-ui/core";
import { Trans } from "react-i18next";

interface WeatherDetailsComponentProps {
  weather: Weather;
}

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

export const WeatherDetailsComponent = (
  props: WeatherDetailsComponentProps
) => {
  const classes = useStyles();
  const weather = props.weather;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableBody>
          <TableRow>
            <TableCell>
              <Trans>Temperatura odczuwalna</Trans>:
            </TableCell>
            <TableCell>{weather.main?.feels_like}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Temperatura minimalna</Trans>:
            </TableCell>
            <TableCell>{weather.main?.feels_like}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Temperatura maksymalna</Trans>:
            </TableCell>
            <TableCell>{weather.main?.temp_max}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Ciśnienie</Trans>:
            </TableCell>
            <TableCell>{weather.main?.pressure}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Wilgotność</Trans>:
            </TableCell>
            <TableCell>{weather.main?.humidity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Opady deszczu</Trans>:
            </TableCell>
            <TableCell>{(weather.rain && weather.rain["1h"]) || 0}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Opady śniegu</Trans>:
            </TableCell>
            <TableCell>{(weather.snow && weather.snow["1h"]) || 0}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Prędkość wiatru</Trans>:
            </TableCell>
            <TableCell>{weather.wind?.speed}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Nachylenie wiatru</Trans>:
            </TableCell>
            <TableCell>{weather.wind?.deg}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Zachmurzenie</Trans>:
            </TableCell>
            <TableCell>{weather.clouds?.all}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Trans>Widoczność</Trans>:
            </TableCell>
            <TableCell>{weather.visibility}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
