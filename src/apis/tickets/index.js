import Axios from "../axios.global";

export const getAllPassengersByBus= async payload => {
  try {
    let {
      data: { data }
    } = await Axios.post(`/getAllPassengersByBus`, payload);
    return data;
  } catch (err) {
    return {};
  }
};

