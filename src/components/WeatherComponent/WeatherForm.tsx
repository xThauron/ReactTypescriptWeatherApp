import React from "react";
import { Form, Field } from "react-final-form";
import { WeatherFormValues, WeatherFormErrors } from "../../models/weatherForm";
import RaisedButton from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Trans } from "react-i18next";

interface WeatherFormProps {
  onSubmit(values: WeatherFormValues): Object | void;
  validate(values: WeatherFormValues): Promise<WeatherFormErrors>;
}

export const WeatherForm = (props: WeatherFormProps) => (
  <Form<WeatherFormValues>
    onSubmit={props.onSubmit}
    validate={props.validate}
    render={({
      handleSubmit,
      submitError,
      submitting,
      pristine,
      values,
      ...props
    }) => (
      <FormControl component="form" onSubmit={handleSubmit}>
        <div>
          <Field name="city">
            {({ input, meta }) => (
              <div>
                <InputLabel htmlFor="city" required={true}>
                  <Trans>City</Trans>
                </InputLabel>
                <Input {...input} id="city" aria-describedby="miasto" />
                {meta.error && meta.touched && (
                  <FormHelperText error={true}>{meta.error}</FormHelperText>
                )}
              </div>
            )}
          </Field>
        </div>
        <RaisedButton
          type="submit"
          disabled={submitting}
          variant="contained"
          color="primary"
        >
          <Trans>Check weather</Trans>
        </RaisedButton>

        {submitError}
      </FormControl>
    )}
  />
);
