import React from "react";
import { Stack, TextField } from "@mui/material";
import FormProps from "./formTypes";

const AccessForm = ({ data, handleChange }: FormProps) => {
  return (
    <Stack spacing={2}>
      <TextField
        name="password"
        label="Senha"
        fullWidth
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <TextField
        name="confirm"
        label="Confirmar senha"
        fullWidth
        type="password"
        value={data.confirm}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default AccessForm;
