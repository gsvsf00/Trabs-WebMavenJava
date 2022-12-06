import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  toastProps: {
    message: string;
    severity?: "success" | "error" | "info" | "warning";
  };
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Toast = ({ toastProps, open, setOpen }: Props) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert onClose={handleClose} severity={toastProps.severity} sx={{ width: "100%" }}>
        {toastProps.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
