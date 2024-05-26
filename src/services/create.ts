import authAxios from "./axiosInstance";

//to create a new board
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
