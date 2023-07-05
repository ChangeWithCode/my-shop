import axios from "axios";
const apiUrl = "https://fakestoreapi.com/";


export const getAllProducts = async (sort) => {
    const response = await axios.get(apiUrl+"products??sort"+sort);
    return response.data;
  };

 