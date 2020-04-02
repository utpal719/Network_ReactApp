import axios from "../axios.global";

export const busChart = async function() {
  try {
    let {
      data: { data }
    } = await axios.get("/getAllBuses");
    return data;
  } catch (err) {
    console.log(err);
  }
};
