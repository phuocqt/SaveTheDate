import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
  rows: PropTypes.number,
};

function InputField(props) {
  const { form, name, label, disable, rows } = props;
  const { control } = form;

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
          rows={rows}
          multiline
        />
      )}
    ></Controller>
  );
}

export default InputField;
