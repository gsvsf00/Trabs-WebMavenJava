import { useEffect, useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SessionsList from "../components/SessionsList";
import api from "../services/api";
import { ISession } from "../types/ISession";

const Sessions = () => {
  const [sessions, setSessions] = useState<ISession[] | null>(null);

  const fetchSessions = async () => {
    const { data } = await api.get("/session/public/available");
    setSessions(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <DashboardLayout>
      <PageHeader
        title="Sessões"
        addButtonUrl="/sessions/adicionar"
        addButtonText="Adicionar Sessão"
      />

      <SessionsList sessions={sessions} />
    </DashboardLayout>
  );
};

export default Sessions;
