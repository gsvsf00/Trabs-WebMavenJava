import { useEffect } from "react";
import { Box, Button, Divider, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import NavItem from "../NavItem";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

const items = [
  {
    href: "/",
    icon: <BarChartIcon />,
    title: "Dashboard",
    allowedRoles: ["ADMIN"]
  },
  {
    href: "/users",
    icon: <GroupIcon />,
    title: "Usuários",
    allowedRoles: ["ADMIN"]
  },
  {
    href: "/filmes",
    icon: <LocalActivityIcon />,
    title: "Filmes",
    allowedRoles: ["ADMIN", "USER", "VENDEDOR", "PUBLIC"]
  },
  {
    href: "/sessions",
    icon: <InsertInvitationIcon />,
    title: "Sessões",
    allowedRoles: ["ADMIN"]
  },
  {
    href: "/perfil",
    icon: <PersonIcon />,
    title: "Perfil",
    allowedRoles: ["ADMIN", "USER", "VENDEDOR"]
  }
];

const DashboardSidebar = ({ open, onClose }: Props) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false
  });

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, []);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4">SIGEv</Typography>
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map(
            (item) =>
              item.allowedRoles.includes(currentUser?.role || "PUBLIC") && (
                <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
              )
          )}
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3
          }}
        />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280
          }
        }}
        variant="permanent">
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary">
      {content}
    </Drawer>
  );
};

export default DashboardSidebar;
