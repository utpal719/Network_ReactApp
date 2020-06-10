import Axios from "../axios.global";

export const getAllPassengersByBus = async (payload) => {
  try {
    let {
      data: { data },
    } = await Axios.post(`/getAllPassengersByBus`, payload);
    return data;
  } catch (err) {
    return {};
  }
};

export const sendTicketBySms = async (pnrNumber) => {
  try {
    if (!pnrNumber) throw Error();
    let { data } = await Axios.get(`/smsETicket/${pnrNumber}`);
    return data;
  } catch (err) {
    return {};
  }
};

export const sendBusNo = async (payload) => {
  try {
    let { data } = await Axios.post("/sendBusNumber", payload);
    return data;
  } catch (err) {
    return {};
  }
};
