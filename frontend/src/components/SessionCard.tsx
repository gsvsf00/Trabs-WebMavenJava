import { Box, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ISession } from "../types/ISession";
import { ITheme } from "../styles/theme";

const CardWrapper = styled(Card)(({ theme }: { theme?: ITheme }) => ({
  boxShadow: theme?.shadows[20],
  color: theme?.palette.secondary.contrastText,
  backgroundColor: theme?.palette.secondary.main
}));

interface Props {
  session: ISession;
}

const SessionCard = ({ session }: Props) => {
  const date = new Date(session.sessionStartDate);
  const isoDate = date.toISOString();
  // get time from isoDate and format it
  const time = isoDate.substring(isoDate.indexOf("T") + 1, isoDate.indexOf("Z"));
  const formattedTime = time.substring(0, 5);

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Link
        to={`/session/${session.sessionIdentifier}`}
        style={{ textDecoration: "none", maxWidth: 250 }}>
        <CardWrapper>
          <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {date?.getDate()} de {months[date?.getMonth()]}
              </Typography>
              <Typography variant="body1">às {formattedTime}</Typography>
            </Box>
            <IconButton size="large" sx={{ color: "white" }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </CardContent>
        </CardWrapper>
      </Link>
    </Grid>
  );
};

export default SessionCard;

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
