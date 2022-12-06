import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button, Grid, TextField, Typography } from "@mui/material";
import api from "../services/api";
import useToast from "../hooks/useToast";
import Toast from "./Toast";

const EditEmailForm = ({ initialEmailValue }: { initialEmailValue?: string }) => {
  const { currentUser, setCurrentUser, token } = useAuth();
  const { toast, open, setOpen, toastProps } = useToast();
  const [email, setEmail] = useState(initialEmailValue);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (token && currentUser?.userIdentifier && email) {
      try {
        const res = await api.post(
          "/user/edit",
          { email },
          {
            headers: {
              token: token,
              userIdentifier: currentUser?.userIdentifier
            }
          }
        );
        setCurrentUser({ ...currentUser, email });
        toast("Email atualizado com sucesso!", "success");
      } catch (error) {
        toast("Este email já está em uso!", "error");
      }
    }
  };

  return (
    <>
      <Toast toastProps={toastProps} open={open} setOpen={setOpen} />
      <Typography variant="h6" fontWeight="bold" marginTop={4} marginBottom={2}>
        Editar email
      </Typography>
      <Grid container columns={{ xs: 4 }}>
        <Grid item xs={4}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={4} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={handleSubmit}
            disabled={initialEmailValue === email}>
            Salvar email
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditEmailForm;
