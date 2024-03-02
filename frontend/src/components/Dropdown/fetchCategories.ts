import axios from "axios";

export async function getUserCategories() {
  return await axios.get("http://127.0.0.1:3000/category", {
    withCredentials: true,
  });
}
