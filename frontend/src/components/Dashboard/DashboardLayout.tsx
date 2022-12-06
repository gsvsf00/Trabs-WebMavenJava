import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280
  }
}));

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
            px: 2,
            py: 10
          }}>
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardSidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <DashboardNavbar onSidebarOpen={() => setIsSidebarOpen(true)} />
    </>
  );
};

export default DashboardLayout;
