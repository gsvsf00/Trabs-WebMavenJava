import DashboardLayout from "../components/Dashboard/DashboardLayout";
import UsersList from "../components/UsersList";
import PageHeader from "../components/PageHeader";
import { IUser } from "../types/IUser";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[] | null>(null);

  const fetchUsers = async () => {
    if (!token) return;
    try {
      const { data } = await api.get("/user/listAll", {
        headers: {
          token
        }
      });
      setUsers(data);
    } catch (error: any) {
      console.log(error);
      const message = error.response.data.message;
      if (message === "Sessão expirou.") {
        await logout();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <PageHeader
        title="Usuários"
        addButtonUrl="/users/adicionar"
        addButtonText="Adicionar Usuário"
      />
      <UsersList users={users} />
    </DashboardLayout>
  );
};

export default Users;
