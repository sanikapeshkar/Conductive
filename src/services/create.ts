import { PiPassword } from "react-icons/pi";
import authAxios from "./axiosInstance";

export const sendboard = async (
  email: string,
  password: string,
  roleId: string
) => {
  try {
    const response = await authAxios.post(
      "/",

      {
        email,
        password,
      }
    );
  } catch (e) {}
};
