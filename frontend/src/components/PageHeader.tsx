import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  title: string;
  addButtonUrl?: string;
  addButtonText?: string;
}

const PageHeader = ({ title, addButtonUrl, addButtonText }: Props) => {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      {currentUser?.role === "ADMIN" && addButtonUrl && (
        <Box>
          <Button variant="contained" component={Link} to={addButtonUrl}>
            {addButtonText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PageHeader;
