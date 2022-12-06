import api from "../services/api";

const getUserByToken = async (token: string) => {
  const res = await api.get("/user/findByToken", {
    headers: {
      token: token
    }
  });
  return res.data;
};

export default getUserByToken;
