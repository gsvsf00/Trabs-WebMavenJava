import { Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { IMovie } from "../types/IMovie";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center">
          {movie.name} ({movie.launchYear})
        </Typography>
        <Box sx={{ my: 3 }} display="flex" justifyContent="center" gap={3}>
          <Typography display="flex">
            <AccessTimeFilledIcon /> {movie.duration}
          </Typography>
          <Typography>
            <b>Classificação:</b> {movie.classification} anos
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {movie.synopsis}
        </Typography>
        <Button
          size="small"
          component={Link}
          endIcon={<ArrowForwardIcon />}
          to={`/filmes/${movie.eventIdentifier}`}
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}>
          Ver sessões
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
