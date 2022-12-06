import { Box, Typography } from "@mui/material";
import WeekendIcon from "@mui/icons-material/Weekend";

const SeatsCaption = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 3, mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WeekendIcon sx={{ color: "gray", fontSize: "20px" }} />
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Vendido
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WeekendIcon sx={{ color: "#10B981", fontSize: "20px" }} />
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Disponível
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WeekendIcon sx={{ color: "#B27B16", fontSize: "20px" }} />
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Selecionado
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SeatsCaption;
