import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField
} from "@mui/material";
import FormProps from "./formTypes";
import MaskedInput from "../MaskedInput";

const PersonalForm = ({ data, handleChange }: FormProps) => {
  return (
    <Stack spacing={2}>
      <TextField name="name" label="Nome" fullWidth value={data.name} onChange={handleChange} />
      <MaskedInput
        label="CPF"
        name="doc"
        mask="999.999.999-99"
        value={data.doc}
        handleChange={handleChange}
      />
      <TextField
        name="birthDate"
        label="Data Nascimento"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={data.birthDate}
        onChange={handleChange}
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="F"
          name="sex"
          value={data.sex}
          onChange={handleChange}>
          <FormControlLabel value="F" control={<Radio />} label="Feminino" />
          <FormControlLabel value="M" control={<Radio />} label="Masculino" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default PersonalForm;
