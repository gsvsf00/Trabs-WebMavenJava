import { useState } from "react";

const useToast = () => {
  const [toastProps, setToastProps] = useState<{
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    message: "",
    severity: "success"
  });
  const [open, setOpen] = useState(false);

  const toast = (message: string, severity: "success" | "error" | "info" | "warning") => {
    setOpen(true);
    setToastProps({
      message,
      severity
    });
  };

  return { toast, open, setOpen, toastProps };
};

export default useToast;
