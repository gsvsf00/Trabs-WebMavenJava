import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import ReservationPanel from "../components/ReservationPanel";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import { ISeat } from "../types/ISeat";
import { ISession } from "../types/ISession";

const Session = () => {
  const { token, logout } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState(null);
  const [session, setSession] = useState<ISession | null>(null);
  const sessionDate = session && new Date(session?.sessionStartDate);
  // get time formated based in ISO date
  const isoDate = sessionDate?.toISOString();
  const time = isoDate?.substring(isoDate.indexOf("T") + 1, isoDate.indexOf("Z"));
  const formattedTime = time?.substring(0, 5);

  const fetchSeats = async () => {
    if (token && id) {
      try {
        const { data } = await api.get("/ticket/seats", {
          headers: {
            token: token,
            sessionidentifier: id
          }
        });
        const sortedSeats = data.sort((a: ISeat, b: ISeat) => a.seat - b.seat);
        setSeats(sortedSeats);
      } catch (error: any) {
        const message = error.response.data.message;
        if (message === "Sessão expirou.") {
          await logout();
          navigate("/login");
        }
      }
    }
  };

  const fetchSession = async () => {
    if (token && id) {
      try {
        const { data } = await api.get("/session/find", {
          headers: {
            token: token,
            identifier: id
          }
        });
        setSession(data);
      } catch (error: any) {
        const message = error.response.data.message;
        if (message === "Sessão expirou.") {
          await logout();
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    fetchSession();
    fetchSeats();
    // fetch seats every 5 seconds
    const interval = setInterval(() => {
      fetchSeats();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!session && !seats) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Reservar para {session?.event.name}
      </Typography>
      <Typography variant="h5" sx={{ mb: 5 }}>
        Sessão dia {sessionDate?.getDate()} de {sessionDate && months[sessionDate?.getMonth() - 1]}{" "}
        às {formattedTime}
      </Typography>
      {session && seats && (
        <ReservationPanel
          seats={seats}
          ticketPrice={session.ticketPrice}
          eventIdentifier={session.event.eventIdentifier}
          sessionIdentifier={session.sessionIdentifier}
        />
      )}
    </DashboardLayout>
  );
};

export default Session;

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
