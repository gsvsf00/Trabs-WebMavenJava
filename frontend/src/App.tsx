import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Movies from "./pages/Movies";
import Sessions from "./pages/Sessions";
import AddMovie from "./pages/AddMovie";
import Movie from "./pages/Movie";
import Session from "./pages/Session";
import Profile from "./pages/Profile";
import AddSession from "./pages/AddSession";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/filmes" element={<Movies />} />
        <Route path="/filmes/:id" element={<Movie />} />
        {/* common user routes */}
        <Route
          element={
            <RequireAuth allowedRoles={["USER", "VENDEDOR", "ADMIN"]} redirectUrl="/login" />
          }>
          <Route path="/session/:id" element={<Session />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>

        {/* admin routes */}
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/adicionar" element={<AddUser />} />
          <Route path="/filmes/adicionar" element={<AddMovie />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/adicionar" element={<AddSession />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
