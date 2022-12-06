import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import MovieInfo from "../components/MovieInfo";
import SessionCard from "../components/SessionCard";
import api from "../services/api";
import { IMovie } from "../types/IMovie";
import { ISession } from "../types/ISession";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [sessions, setSessions] = useState<ISession[] | null>(null);

  const fetchMovie = async () => {
    const { data } = await api.get(`/event/public/${id}`);
    setMovie(data);
  };

  const fetchSessions = async () => {
    const { data } = await api.get("/session/public/available");
    setSessions(data);
  };

  useEffect(() => {
    fetchMovie();
    fetchSessions();
  }, []);

  if (!movie && !sessions) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>
      <MovieInfo movie={movie} />
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
        Sessões disponíveis
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {sessions
          ?.filter((session) => session.event.eventIdentifier === movie?.eventIdentifier)
          .map((session) => (
            <SessionCard session={session} />
          ))}
      </Grid>
    </DashboardLayout>
  );
};

export default Movie;
