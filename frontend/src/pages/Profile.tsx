import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import MaskedInput from "../components/MaskedInput";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import EditPasswordForm from "../components/EditPasswordForm";
import EditEmailForm from "../components/EditEmailForm";
import useToast from "../hooks/useToast";
import Toast from "../components/Toast";
import getUserByToken from "../utils/getUserByToken";

const Profile = () => {
  const { currentUser, setCurrentUser, token } = useAuth();
  const { toast, open, setOpen, toastProps } = useToast();

  const [data, setData] = useState({
    name: currentUser?.name || "",
    doc: currentUser?.doc || "",
    telephone: currentUser?.telephone || "",
    birthDate:
      (currentUser?.birthDate && new Date(currentUser?.birthDate).toISOString().split("T")[0]) || ""
  });

  const handleChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (token && currentUser?.userIdentifier) {
      try {
        const res = await api.post("/user/edit", data, {
          headers: {
            token: token,
            userIdentifier: currentUser?.userIdentifier
          }
        });
        toast("Perfil atualizado com sucesso!", "success");
        const newUser = await getUserByToken(token);
        setCurrentUser(newUser);
        console.log(res);
      } catch (error) {
        toast("Erro ao atualizar perfil, tente novamente mais tarde!", "error");
        console.log(error);
      }
    }
  };

  return (
    <DashboardLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
        <Toast toastProps={toastProps} open={open} setOpen={setOpen} />
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Perfil
        </Typography>
        <Box sx={{ maxWidth: 600 }}>
          <Grid container columns={{ xs: 4 }} spacing={2}>
            <Grid item xs={2}>
              <TextField
                label="Nome"
                name="name"
                fullWidth
                value={data.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <MaskedInput
                label="CPF"
                name="doc"
                mask="999.999.999-99"
                value={data.doc}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <MaskedInput
                label="Telefone"
                name="telephone"
                mask="(99) 9 9999-9999"
                value={data.telephone}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Data de nascimento"
                name="birthDate"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                value={data.birthDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                size="large">
                Salvar
              </Button>
            </Grid>
          </Grid>
          <EditEmailForm initialEmailValue={currentUser?.email} />
          <EditPasswordForm />
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Profile;
