import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  backUrl: string;
  backButtonText: string;
}

const HeaderBackButton = ({ title, backUrl, backButtonText }: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Stack>
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to={backUrl}
          variant="text"
          size="small"
          color="secondary"
          sx={{ display: "flex", justifyContent: "start", px: 0 }}>
          {backButtonText}
        </Button>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};

export default HeaderBackButton;
