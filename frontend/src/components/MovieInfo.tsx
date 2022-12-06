import { Box, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { IMovie } from "../types/IMovie";
import HeaderBackButton from "./HeaderBackButton";

interface Props {
  movie?: IMovie | null | undefined;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <Box>
      <HeaderBackButton
        title={`${movie?.name} (${movie?.launchYear})`}
        backUrl="/filmes"
        backButtonText="Voltar para filmes"
      />
      <Box sx={{ my: 3 }} display="flex" gap={3}>
        <Typography display="flex">
          <AccessTimeFilledIcon /> {movie?.duration}
        </Typography>
        <Typography>
          <b>Classificação:</b> {movie?.classification} anos
        </Typography>
      </Box>
      <Typography variant="body1">{movie?.synopsis}</Typography>
    </Box>
  );
};

export default MovieInfo;
