import React from "react";
import { WeatherFormValues, WeatherFormErrors } from "../../models/weatherForm";
import { WeatherForm } from "./WeatherForm";
import { FORM_ERROR } from "final-form";
import { weatherService } from "../../services/weather.service";
import { Weather } from "../../models/weather";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import { WeatherInfoComponent } from "./WeatherInfoComponent";
import { Trans } from "react-i18next";
import i18n from "../../i18n";

interface WeatherPageComponentProps {}

interface WeatherPageComponentState {
  weather: Weather;
  isLoaded: boolean;
}

class WeatherPageComponent extends React.Component<
  WeatherPageComponentProps,
  WeatherPageComponentState
> {
  constructor(props: WeatherPageComponentProps) {
    super(props);
    this.state = {
      weather: {},
      isLoaded: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  async onSubmit(values: WeatherFormValues) {
    return weatherService
      .getByCityName(values.city, i18n.language)
      .then((weather) => {
        this.setState({ weather, isLoaded: true });
      })
      .catch((err: string) => {
        return { [FORM_ERROR]: err };
      });
  }

  async validate(values: WeatherFormValues) {
    const errors: WeatherFormErrors = {};

    if (!values.city) errors.city = "Proszę wprowadzić miasto!";

    return errors;
  }

  render() {
    const { weather, isLoaded } = this.state;

    return (
      <Container>
        <Trans>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                <Trans>Check your weather!</Trans>
              </Typography>
              <WeatherForm onSubmit={this.onSubmit} validate={this.validate} />
            </CardContent>
          </Card>

          {isLoaded && <WeatherInfoComponent weather={weather} />}
        </Trans>
      </Container>
    );
  }
}

export default WeatherPageComponent;
