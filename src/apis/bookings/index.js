import axios from "../axios.global";

export const book = async function(payload) {
  try {
    let { data } = await axios.post("/bookTicket", payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const eTicket = async function(payload) {
  try {
    let { data } = await axios.get(`/getBookingByPNR/${payload.pnrNumber}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMyTrips = async function() {
  try {
    let {
      data: { data }
    } = await axios.get("/myTrips");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCancelTicketBooking = async payload => {
  try {
    let {
      data: { data }
    } = await axios.post("/cancelTicketGetBooking", payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const cancelTicket = async payload => {
  try {
    let {
      data: { data }
    } = await axios.post("/cancelBooking", payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};
