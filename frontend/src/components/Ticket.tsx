import { useEffect, useState } from "react";
import { Typography, Box, FormControl, RadioGroup, Radio, FormControlLabel } from "@mui/material";

interface Props {
  seat: number;
  ticketIdentifier: string;
  changeTicketType: (ticketIdentifier: string) => void;
}

const Ticket = ({ seat, ticketIdentifier, changeTicketType }: Props) => {
  const [value, setValue] = useState("inteira");

  useEffect(() => {
    changeTicketType(ticketIdentifier);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
      <Typography variant="h6">#{seat}</Typography>
      <FormControl>
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel value="inteira" control={<Radio size="small" />} label="Inteira" />
          <FormControlLabel value="meia" control={<Radio size="small" />} label="Meia" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Ticket;
