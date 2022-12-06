import React, { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import PersonalForm from "./PersonalForm";
import ContactForm from "./ContactForm";
import AccessForm from "./AccessForm";
import { FormData } from "./formTypes";

const steps = ["Dados Pessoais", "Dados de Contato", "Dados de Acesso"];

interface Props {
  handleSubmit: (data: FormData) => void;
}

const SignUpForm = ({ handleSubmit }: Props) => {
  const [data, setData] = useState({
    name: "",
    doc: "",
    birthDate: "",
    sex: "F",
    email: "",
    telephone: "",
    login: "",
    password: "",
    confirm: ""
  });
  const [step, setStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const forms = [
    <PersonalForm data={data} handleChange={handleChange} />,
    <ContactForm data={data} handleChange={handleChange} />,
    <AccessForm data={data} handleChange={handleChange} />
  ];

  return (
    <form>
      <Stepper activeStep={step} sx={{ mb: 2 }}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {forms[step]}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {step > 0 && (
          <Button
            color="inherit"
            disabled={step === 0}
            onClick={() => setStep((prev) => prev - 1)}
            sx={{ mr: 1 }}>
            Voltar
          </Button>
        )}
        <Box sx={{ flex: "1 1 auto" }} />
        {step === steps.length - 1 ? (
          <Button variant="contained" onClick={() => handleSubmit(data)}>
            Cadastrar-se
          </Button>
        ) : (
          <Button onClick={() => setStep((prev) => prev + 1)} variant="contained">
            Avançar
          </Button>
        )}
      </Box>
    </form>
  );
};

export default SignUpForm;
