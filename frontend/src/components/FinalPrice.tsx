import { Box, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { ISelectedSeat } from "../types/ISeat";
import getTotalPrice from "../utils/getTotalPrice";

interface Props {
  selected?: ISelectedSeat[];
}

const FinalPrice = ({ selected }: Props) => {
  const { currentUser } = useAuth();
  const finalPrice = getTotalPrice(selected, currentUser?.role);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <Typography variant="h6">Total</Typography>
      <Typography variant="h6">R${finalPrice}</Typography>
    </Box>
  );
};

export default FinalPrice;
