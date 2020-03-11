import Constants from "./actionConstants";

let initialState = {
    search: {
        to: "",
        from: "",
        date: ""
    },
    seatSelection: {
        busId: "",
        midId: "",
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
            return { ...state, seatSelection: { busId: payload.busId, midId: payload.midId } }
        default:
            return state
    }
}