import React from "react";
import { Weather } from "../../models/weather";
import { CardContent, Card, Typography } from "@material-ui/core";

interface WeatherInfoComponentProps {
  weather: Weather;
}

const getImageSrc = (iconCode: string) => {
  return `http://openweathermap.org/img/w/${iconCode}.png`;
};

export const WeatherInfoComponent = (props: WeatherInfoComponentProps) => {
  const { weather } = props;
  return (
    <>
      {weather && weather.weather && (
        <Card>
          <CardContent>
            <Typography component="div" variant="h6">
              {weather.weather[0].description}
            </Typography>
            <Typography component="div" variant="h6" display="inline">
              <img
                src={getImageSrc(weather.weather[0].icon)}
                alt="Weather icon"
              />
              {weather.main?.temp}&#8451;
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
