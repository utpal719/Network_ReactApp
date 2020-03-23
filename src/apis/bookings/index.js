import axios from "../axios.global";

export const book = async function(payload) {
  try {
    let {
      data: { data }
    } = await axios.post("/bookTicket", payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};
