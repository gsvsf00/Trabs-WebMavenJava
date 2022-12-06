import React from "react";
import { Stack, TextField } from "@mui/material";
import FormProps from "./formTypes";

const ContactForm = ({ data, handleChange }: FormProps) => {
  return (
    <Stack spacing={2}>
      <TextField name="email" label="Email" fullWidth value={data.email} onChange={handleChange} />
      <TextField
        name="telephone"
        label="Telefone"
        fullWidth
        value={data.telephone}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default ContactForm;
