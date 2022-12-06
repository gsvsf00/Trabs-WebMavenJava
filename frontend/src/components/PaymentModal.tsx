import { useState } from "react";
import { Box, Button, Modal, Typography, IconButton } from "@mui/material";
import FinalPrice from "./FinalPrice";
import Close from "@mui/icons-material/Close";
import { ISelectedSeat } from "../types/ISeat";
import PaymentConfirmation from "./PaymentConfirmation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 2
};

interface Props {
  selected: ISelectedSeat[];
  paymentData?: any;
  handlePayment: () => void;
}

const PaymentModal = ({ selected, paymentData, handlePayment }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ width: "100%" }}
        disabled={selected.length === 0}>
        Comprar
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography id="modal-modal-title" variant="h5" component="h2" align="center">
              Pagamento
            </Typography>
            <IconButton sx={{ color: "#555555" }} onClick={handleClose} size="small">
              <Close />
            </IconButton>
          </Box>
          {paymentData ? (
            <PaymentConfirmation paymentData={paymentData} />
          ) : (
            <>
              <Box sx={{ mt: 2 }} id="modal-modal-description">
                <Typography variant="body1">Assentos selecionados:</Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {selected.map((seat) => (
                    <Box key={seat.seat}>#{seat.seat}</Box>
                  ))}
                  <Box sx={{ ml: "auto", my: 5, width: "100%" }}>
                    <FinalPrice selected={selected} />
                  </Box>
                </Box>
              </Box>
              <Button variant="contained" size="small" onClick={handlePayment}>
                Confirmar Pagamento
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentModal;
