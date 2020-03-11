import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const SeatSelection = () => {
    let busData = useSelector(state => state.seatSelection);
    console.log(busData)
    return (
        <div>
            <NavBar />
            <Footer />
        </div>
    )
}

export default SeatSelection