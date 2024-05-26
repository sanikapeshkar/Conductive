import authAxios from "./axiosInstance";

//to get all boards data wit rates
export const getboards = async () => {
  try {
    const response = await authAxios.get("/board/all");
    console.log(response.data.data);

    return response.data.data;
  } catch (e: any) {
    console.log(e);
  }
};

//patch api to edit a board
export const editboard = async (boardId:string,updateddata:any) => {
  try {
    const response = await authAxios.patch(`/board/${boardId}`,updateddata);
    console.log(response.data.data + "response from edit of a board");

    // return response.data.data;
  } catch (e: any) {
    console.log(e);
  }
};


//delete api to delele a board

export const deleteboard = async (boardId:string) => {
    try {
      const response = await authAxios.delete("url" );
      console.log(response.data.data + "deleted board");
  
      // return response.data.data;
    } catch (e: any) {
      console.log(e);
    }
  };
