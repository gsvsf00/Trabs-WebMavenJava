import { Box } from "@mui/material";
import { ISelectedSeat } from "../types/ISeat";
import Ticket from "./Ticket";

interface Props {
  selected: ISelectedSeat[];
  changeTicketType: (ticketIdentifier: string) => void;
}

const ReserveForm = ({ selected, changeTicketType }: Props) => {
  return (
    <form>
      <Box>
        {selected.map((seat) => (
          <Ticket
            ticketIdentifier={seat.ticketIdentifier}
            seat={seat.seat}
            changeTicketType={changeTicketType}
            key={seat.ticketIdentifier}
          />
        ))}
      </Box>
    </form>
  );
};

export default ReserveForm;
