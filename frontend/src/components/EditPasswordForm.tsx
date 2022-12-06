import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";

const EditPasswordForm = () => {
  const { currentUser, token } = useAuth();
  const [data, setData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(data);

    if (data.password === data.confirmPassword && token && currentUser?.userIdentifier) {
      try {
        const res = await api.post(
          "/user/edit",
          { password: data.password },
          {
            headers: {
              token: token,
              userIdentifier: currentUser?.userIdentifier
            }
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Typography variant="h6" fontWeight="bold" marginTop={4} marginBottom={2}>
        Editar senha
      </Typography>
      <Grid container columns={{ xs: 4 }} spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Senha"
            name="password"
            type="password"
            fullWidth
            value={data.password}
            onChange={handleChange}
            error={error}
            helperText={error && "Senhas devem coincidir"}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Confirmar Senha"
            name="confirmPassword"
            type="password"
            fullWidth
            value={data.confirmPassword}
            onChange={handleChange}
            error={error}
            helperText={error && "Senhas devem coincidir"}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={{ mt: 2 }}
        fullWidth
        onClick={handleSubmit}>
        Salvar senha
      </Button>
    </>
  );
};

export default EditPasswordForm;
