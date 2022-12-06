import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import { Box } from "@mui/material";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import AddMovieForm from "../components/AddMovieForm";
import HeaderBackButton from "../components/HeaderBackButton";

const AddMovie = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    synopsis: "",
    duration: "",
    eventStartDate: "",
    eventEndDate: "",
    classification: 18,
    launchYear: "2022",
    movieType: 0
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (token) {
      try {
        const res = await api.post("/event/create", formData, {
          headers: {
            token: token
          }
        });
        navigate("/filmes");
      } catch (error: any) {
        console.log(error);
        const message = error.response.data.message;
        if (message === "Sessão expirou.") {
          await logout();
          navigate("/login");
        }
      }
    }
  };

  return (
    <DashboardLayout>
      <HeaderBackButton
        title="Adicionar Filme"
        backUrl="/filmes"
        backButtonText="Voltar para filmes"
      />
      <Box>
        <AddMovieForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </Box>
    </DashboardLayout>
  );
};

export default AddMovie;
