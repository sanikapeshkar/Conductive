import authAxios from "./axiosInstance";

export const checkLogincredentials = async (
  email: string,
  password: string
) => {
  try {
    console.log(email + password);
    const {data: { data }} = await authAxios.post("/auth/login", {
      email,
      password,
    });

    const token = data.token;
    if (token) {
      localStorage.setItem("token", token);
    }

    return data.roleId;
  } catch (e: any) {
    console.log(e.message);
  }
};


export const checkPage = async (id: string): Promise<string> => {
  try {
    const {data} = await authAxios.get(`/role/${id}`);
    console.log(data.data.data);
  
    return data.data.type;
  } catch (error) {
    console.error(error);
    return "error"; 
  }
};
