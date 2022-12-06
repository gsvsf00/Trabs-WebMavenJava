import { useEffect, useState } from "react";
import api from "../services/api";
import { Grid } from "@mui/material";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import MovieCard from "../components/MovieCard";
import PageHeader from "../components/PageHeader";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await api.get("/event/public/available");
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <DashboardLayout>
      <PageHeader
        title="Filmes em cartaz"
        addButtonUrl="/filmes/adicionar"
        addButtonText="Adicionar Filme"
      />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {movies.map((movie, index) => (
          <Grid item xs={4} sm={4} md={6} key={index}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default Movies;
