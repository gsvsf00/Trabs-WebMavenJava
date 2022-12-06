import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { FormData } from "../components/SignUpForm/formTypes";
import { Card, Typography, Container } from "@mui/material";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: FormData) => {
    try {
      const res = await api.post("/user/create", {
        name: data.name,
        password: data.password,
        doc: data.doc,
        sex: data.sex,
        email: data.email,
        telephone: data.telephone,
        birthDate: data.birthDate
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card sx={{ width: 600, padding: 2 }}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
          Cadastrar-se
        </Typography>
        <SignUpForm handleSubmit={handleSubmit} />
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Já possui uma conta?{" "}
          <Typography component={Link} to="/login" variant="body2">
            Entrar
          </Typography>
        </Typography>
      </Card>
    </Container>
  );
};

export default SignUp;
