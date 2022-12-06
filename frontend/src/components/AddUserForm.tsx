import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import MaskedInput from "./MaskedInput";

interface Props {
  formData: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const AddUserForm = ({ formData, handleChange, handleSubmit }: Props) => {
  return (
    <Grid
      container
      columns={{ xs: 8, md: 12 }}
      component="form"
      spacing={2}
      onSubmit={handleSubmit}>
      <Grid item xs={4} md={6}>
        <TextField
          label="Nome"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="Data de nascimento"
          name="birthDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={formData.birthDate}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <MaskedInput
          mask="(99) 9 9999-9999 "
          label="Telefone"
          name="telephone"
          value={formData.telephone}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <MaskedInput
          mask="999.999.999-99"
          label="CPF"
          name="doc"
          value={formData.doc}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="Senha"
          name="password"
          fullWidth
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <FormControl>
          <FormLabel id="gender">Sexo</FormLabel>
          <RadioGroup
            aria-labelledby="gender"
            name="sex"
            value={formData.sex}
            onChange={handleChange}>
            <FormControlLabel value="M" control={<Radio />} label="Masculino" />
            <FormControlLabel value="F" control={<Radio />} label="Feminino" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4} md={6}>
        <FormControl>
          <FormLabel id="role">Função</FormLabel>
          <RadioGroup
            aria-labelledby="role"
            name="role"
            value={formData.role}
            onChange={handleChange}>
            <FormControlLabel value={0} control={<Radio />} label="Usuário" />
            <FormControlLabel value={1} control={<Radio />} label="Administrador" />
            <FormControlLabel value={2} control={<Radio />} label="Vendedor" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Button variant="contained" fullWidth type="submit" size="large">
          Adicionar
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddUserForm;
