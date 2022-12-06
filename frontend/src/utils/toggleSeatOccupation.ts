import api from "../services/api";

const toggleSeatOccupation = async (ticketIdentifier: string, token: string) => {
  const res = await api.post(
    "/ticket/seat/ocuppeid",
    {},
    {
      headers: {
        token,
        ticketidentifier: ticketIdentifier
      }
    }
  );
  return res.data;
};

export default toggleSeatOccupation;
