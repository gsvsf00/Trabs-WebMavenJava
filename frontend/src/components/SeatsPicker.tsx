import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { ITheme } from "../styles/theme";
import { ISeat, ISelectedSeat } from "../types/ISeat";
import Seat from "./Seat";

interface Props {
  selectSeat: (ticketIdentifier: string, seat: number) => void;
  cancelSelection: (ticketIdentifier: string) => void;
  selected: ISelectedSeat[];
  seats: ISeat[][];
}

const CinemaScreen = styled("div")(({ theme }: { theme?: ITheme }) => ({
  width: "100%",
  height: 70,
  backgroundColor: theme?.palette.primary.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme?.palette.primary.contrastText,
  fontWeight: "bold",
  fontSize: 25,
  boxShadow: theme?.shadows[20],
  borderRadius: 2
}));

const SeatsPicker = ({ selectSeat, cancelSelection, selected, seats }: Props) => {
  return (
    <Box>
      {seats.map((row, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {alphabet[index]}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            {row.map((seat) => (
              <Seat
                key={seat.ticketIdentifier}
                ticketIdentifier={seat.ticketIdentifier}
                selected={selected.some((s) => s.ticketIdentifier === seat.ticketIdentifier)}
                occupied={seat.occupiedSeat}
                seat={seat.seat}
                select={selectSeat}
                cancel={cancelSelection}
              />
            ))}
          </Box>
        </Box>
      ))}
      <CinemaScreen>Tela</CinemaScreen>
    </Box>
  );
};

export default SeatsPicker;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = letters.split("");
