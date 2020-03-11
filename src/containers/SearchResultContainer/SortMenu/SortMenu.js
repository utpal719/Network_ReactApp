import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";

const SortMenu = () => {
    let sortOptions = ["Price (high to low)", "Price (low to high)", "Duration", "Arrival", "Departure"];
    let [selectedOption, setOption] = useState(0);
    let [anchorEl, setAnchorEl] = useState(null);

    let handleClick = e => setAnchorEl(e.currentTarget);

    let handleClose = _ => setAnchorEl(null);

    return (
        <>
            <Typography variant="caption" onClick={handleClick}><a href="#">Sort by : {sortOptions[selectedOption]}</a></Typography>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {sortOptions.map((option, index) =>
                    <MenuItem key={index} onClick={_ => setOption(index)}>{option}</MenuItem>
                )}
            </Menu>
        </>
    )
}

export default SortMenu;