import React from "react";

export default interface FormProps {
  data: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormData {
  name?: string;
  doc?: string;
  birthDate?: string;
  sex: string;
  email?: string;
  telephone?: string;
  password?: string;
  confirm?: string;
}
