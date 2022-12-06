import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import PageHeader from "../components/PageHeader";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { ISession } from "../types/ISession";

interface IReport {
  eventName: string;
  amountValue: number;
  ticketValue: number;
  totalSeats: number;
  saleSeats: number;
  sessionStartDate: number;
}

const Dashboard = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<ISession[] | null>(null);
  const [session, setSession] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [report, setReport] = useState<IReport[] | null>(null);

  const fetchSessions = async () => {
    try {
      const { data } = await api.get("/session/public/available");
      setSessions(data);
    } catch (error: any) {
      const message = error.response.data.message;
      if (message === "Sessão expirou.") {
        await logout();
        navigate("/login");
      }
    }
  };

  const handleSubmit = async () => {
    if (!token) return;
    try {
      const res = await api.get(`/report/billing?date=${date}&sessionidentifier=${session}`, {
        headers: {
          token: token
        }
      });
      setReport(res.data);
      console.log(res);
    } catch (error: any) {
      const message = error.response.data.message;
      if (message === "Sessão expirou.") {
        await logout();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <DashboardLayout>
      <PageHeader title="Dashboard" />

      <Grid container columns={{ xs: 8, md: 12 }} spacing={2}>
        <Grid item xs={4} md={6}>
          <TextField
            label="Data"
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={4} md={6}>
          <FormControl fullWidth>
            <InputLabel id="session">Sessão</InputLabel>
            <Select
              name="session"
              labelId="session"
              id="session"
              label="Sessão"
              value={session}
              onChange={(e) => setSession(e.target.value)}>
              <MenuItem value={null}>Nenhuma sessão específica</MenuItem>
              {sessions?.map((session) => {
                // get time formated based in ISO date
                const sessionDate = new Date(session.sessionStartDate);
                const isoDate = sessionDate.toISOString();
                const time = isoDate.substring(isoDate.indexOf("T") + 1, isoDate.indexOf("Z"));
                const formattedTime = time.substring(0, 5);

                return (
                  <MenuItem value={session.sessionIdentifier} key={session.sessionIdentifier}>
                    {session.event.name} - {sessionDate.toLocaleDateString()} - {formattedTime}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Gerar relatório
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ minWidth: 1000, mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Filme</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Faturamento</TableCell>
              <TableCell>N° de assentos</TableCell>
              <TableCell>Assentos vendidos</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {report?.map((data, index) => (
              <TableRow hover key={index}>
                <TableCell>{data.eventName}</TableCell>
                <TableCell>R${data.ticketValue}</TableCell>
                <TableCell>R${data.amountValue}</TableCell>
                <TableCell>{data.totalSeats}</TableCell>
                <TableCell>{data.saleSeats}</TableCell>
                <TableCell>{new Date(data.sessionStartDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
