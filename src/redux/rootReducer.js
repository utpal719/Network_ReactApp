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
    }
}

export default function (state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case Constants.SET_SEARCH:
            return {
                ...state, search: {
                    to: payload.to,
                    from: payload.from,
                    date: payload.date
                }
            }
        case Constants.RESET_SEARCH:
            return { ...initialState }
        case Constants.BUS_SELECT:
            return {
                ...state, bus: {
                    busId: payload.busId,
                    midId: payload.midId,
                    startTime: payload.startTime,
                    endtime: payload.endtime,
                    seatCapacity: payload.seatCapacity,
                    fare: payload.fare
                }
            }
        default:
            return state
    }
}