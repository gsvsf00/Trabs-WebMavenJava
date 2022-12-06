import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IMovie } from "../types/IMovie";
import getSessionDuration from "../utils/getSessionDuration";

interface Props {
  formData: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  setEndDate: (value: string) => void;
  submitting: boolean;
}

const AddSessionForm = ({
  formData,
  handleChange,
  handleSubmit,
  setEndDate,
  submitting
}: Props) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const selectedMovie = movies.find((movie) => movie.eventIdentifier === formData.eventIdentifier);
  const sessionLimitMinDate =
    selectedMovie && new Date(selectedMovie?.eventStartDate).toISOString().split(".")[0];
  const sessionLimitMaxDate =
    selectedMovie && new Date(selectedMovie?.eventEndDate).toISOString().split(".")[0];

  const sessionDuration =
    selectedMovie &&
    formData.sessionStartDate !== "" &&
    getSessionDuration(selectedMovie?.duration, formData.sessionStartDate);

  const fetchMovies = async () => {
    const res = await api.get("/event/public/available");
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sessionDuration) setEndDate(sessionDuration);
  }, [sessionDuration]);

  return (
    <Grid
      container
      columns={{ xs: 8, md: 12 }}
      component="form"
      spacing={2}
      onSubmit={handleSubmit}>
      <Grid item xs={4} md={6}>
        <FormControl fullWidth>
          <InputLabel id="event">Evento</InputLabel>
          <Select
            name="eventIdentifier"
            labelId="event"
            id="eventIdentifier"
            label="Evento"
            value={formData.eventIdentifier}
            onChange={handleChange}>
            {movies?.map((movie) => (
              <MenuItem value={movie.eventIdentifier}>{movie.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="Preço do ingresso"
          name="ticketPrice"
          type="number"
          fullWidth
          value={formData.ticketPrice}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="Data de início"
          name="sessionStartDate"
          type="datetime-local"
          disabled={!selectedMovie}
          inputProps={{
            min: sessionLimitMinDate,
            max: sessionLimitMaxDate
          }}
          helperText={
            selectedMovie &&
            sessionLimitMaxDate &&
            `O evento acaba em ${sessionLimitMaxDate?.split("T")[0].split("-").reverse().join("/")}`
          }
          fullWidth
          value={formData.sessionStartDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="Data de fim"
          name="sessionEndDate"
          type="datetime-local"
          disabled={true}
          inputProps={{
            min: sessionLimitMinDate,
            max: sessionLimitMaxDate
          }}
          helperText={
            selectedMovie &&
            sessionLimitMaxDate &&
            `O evento acaba em ${sessionLimitMaxDate?.split("T")[0].split("-").reverse().join("/")}`
          }
          fullWidth
          value={sessionDuration}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Número de assentos"
          name="numberOfSeats"
          type="number"
          fullWidth
          value={formData.numberOfSeats}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingButton
          variant="contained"
          type="submit"
          fullWidth
          size="large"
          loading={submitting}>
          Adicionar
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default AddSessionForm;
