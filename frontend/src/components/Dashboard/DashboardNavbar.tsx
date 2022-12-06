import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import styled from "@emotion/styled";
import { ITheme } from "../../styles/theme";

interface Props {
  onSidebarOpen: () => void;
}

const DashboardNavbarRoot = styled(AppBar)(({ theme }: { theme?: ITheme }) => ({
  backgroundColor: theme?.palette.background.paper,
  boxShadow: theme?.shadows[20]
}));

const DashboardNavbar = ({ onSidebarOpen, ...other }: Props) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: "calc(100% - 280px)"
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none"
              }
            }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

          {currentUser ? (
            <Button
              variant="contained"
              color="error"
              endIcon={<LogoutIcon />}
              onClick={handleLogout}>
              Sair
            </Button>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button variant="contained" component={Link} to="/login" color="secondary">
                Entrar
              </Button>
              <Button variant="outlined" component={Link} to="/signup" color="secondary">
                Cadastrar-se
              </Button>
            </Stack>
          )}
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

export default DashboardNavbar;
