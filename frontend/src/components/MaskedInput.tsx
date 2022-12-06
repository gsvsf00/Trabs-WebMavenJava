import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

interface Props {
  label: string;
  name: string;
  mask: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MaskedInput = ({ label, name, mask, value, handleChange }: Props) => {
  return (
    <InputMask mask={mask} value={value} onChange={handleChange}>
      {(inputProps: any) => <TextField {...inputProps} fullWidth name={name} label={label} />}
    </InputMask>
  );
};

export default MaskedInput;
