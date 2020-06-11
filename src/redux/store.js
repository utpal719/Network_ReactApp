import jwt from "jsonwebtoken";
import config from "../config";

export const decodeToken = (token) => {
  let user = {
    loggedIn: token ? true : false,
  };
  if (token) {
    let decoded = jwt.decode(token, config.JWT_SECRET);
    user = { ...user, ...decoded, token: token };
  }
  return {
    get: function(field) {
      return user[field];
    },
  };
};

let token = localStorage.getItem("ntToken");
let decoded = decodeToken(token);

export const initialState = {
  user: {
    userId: decoded.get("userId"),
    loggedIn: decoded.get("loggedIn") ? true : false,
    role: decoded.get("role"),
    username: decoded.get("userName"),
    percentage: decoded.get("percentage"),
    token: decoded.get("token"),
  },
  search: {
    to: "",
    from: "",
    date: "",
  },
  bus: {
    busId: "",
    midId: "",
    startTime: "",
    endTime: "",
    seats: "",
  },
  bookingInfo: {
    fare: 0,
    passengerDetails: [{ name: "", gender: "", age: "" }],
    email: "",
    mobile: "",
    totalPayable: 0,
    seats: [],
    boardingPoint: "",
    agentFare: 0,
  },
  busSearchData: [],
};
