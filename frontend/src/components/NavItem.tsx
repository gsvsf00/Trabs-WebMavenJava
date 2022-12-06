import React from "react";
import { Box, Button, ListItem } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

interface Props {
  href: string;
  icon?: React.ReactNode;
  title: string;
}

const NavItem = ({ href, icon, title, ...others }: Props) => {
  const location = useLocation();
  const active = href === location.pathname;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}>
      <Button
        disableRipple
        component={Link}
        startIcon={icon}
        to={href}
        sx={{
          backgroundColor: active && "rgba(255,255,255, 0.08)",
          borderRadius: 1,
          color: active ? "secondary.main" : "neutral.300",
          fontWeight: active && "fontWeightBold",
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? "secondary.main" : "neutral.400"
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)"
          }
        }}>
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};

export default NavItem;
