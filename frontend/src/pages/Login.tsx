import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Container, TextField, Stack, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type LocationProps = {
  state: {
    from: Location;
  };
};

const Login = () => {
  const { login, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation() as LocationProps;
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (currentUser) navigate("/");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate(from);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card sx={{ width: 350 }}>
        <CardContent>
          <Typography variant="h4" align="center">
            Entrar
          </Typography>
          <Stack sx={{ marginTop: 2 }} spacing={2} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="standard"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Senha"
              type="password"
              variant="standard"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Entrar
            </Button>
            <Typography variant="body2" align="center">
              Ainda não tem uma conta?{" "}
              <Typography component={Link} to="/signup" variant="body2">
                Cadastre-se
              </Typography>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
