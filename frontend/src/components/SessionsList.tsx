import { Box, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { ISession } from "../types/ISession";
import { Link } from "react-router-dom";

interface Props {
  sessions?: ISession[] | null | undefined;
}

const SessionsList = ({ sessions }: Props) => {
  return (
    <Box sx={{ minWidth: 1000 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Filme</TableCell>
            <TableCell>Ingresso</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>N° Assentos</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Horário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions?.slice(0, 10).map((session) => {
            const date = new Date(session.sessionStartDate);
            const isoDate = date.toISOString();
            // get time from isoDate and format it
            const time = isoDate.substring(isoDate.indexOf("T") + 1, isoDate.indexOf("Z"));
            const formattedTime = time.substring(0, 5);

            return (
              <TableRow
                hover
                key={session.sessionIdentifier}
                component={Link}
                to={`/session/${session.sessionIdentifier}`}>
                <TableCell>{session.event.name}</TableCell>
                <TableCell>R${session.ticketPrice}</TableCell>
                <TableCell>{session.sessiosStatus}</TableCell>
                <TableCell>{session.numberOfSeats}</TableCell>
                <TableCell>{date.toLocaleDateString()}</TableCell>
                <TableCell>{formattedTime}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SessionsList;
