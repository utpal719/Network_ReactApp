import Constants from "./actionConstants";

let initialState = {
  search: {
    to: "",
    from: "",
    date: ""
  },
  bus: {
    busId: "",
    midId: "",
    startTime: "",
    endtime: "",
    seats: ""
  },
  bookingInfo: {
    fare: 0,
    passengerDetails: [{ name: "", gender: "", age: "" }],
    email: "",
    mobile: "",
    totalPayable: 0,
    seats: []
  }
};

export default function(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case Constants.SET_SEARCH:
      return {
        ...state,
        search: {
          to: payload.to,
          from: payload.from,
          date: payload.date
        }
      };
    case Constants.RESET_SEARCH:
      return { ...initialState };
    case Constants.BUS_SELECT:
      return {
        ...state,
        bus: {
          busId: payload.busId,
          midId: payload.midId,
          startTime: payload.startTime,
          endtime: payload.endtime,
          seatCapacity: payload.seatCapacity,
          fare: payload.fare
        }
      };
    case Constants.SET_FARE:
      return {
        ...state,
        bookingInfo: { ...state.bookingInfo, fare: payload.fare }
      };
    case Constants.SET_SEATS:
      return {
        ...state,
        bookingInfo: { ...state.bookingInfo, seats: payload.seats }
      };

    case Constants.SET_PASSENGER_DETAILS: {
      let bookingInfo = { ...state.bookingInfo };
      let passengerDetails = { ...bookingInfo.passengerDetails };
      passengerDetails = payload.passengerDetails;
      bookingInfo = { ...bookingInfo, passengerDetails: passengerDetails };
      return {
        ...state,
        bookingInfo
      };
    }
    default:
      return state;
  }
}
