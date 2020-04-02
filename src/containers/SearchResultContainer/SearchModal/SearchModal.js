import React, { useState } from "react";
import { Typography, Dialog, DialogTitle, DialogContent, withStyles, Tabs, Tab, Grid, Select, Button, MenuItem, TextField, InputLabel } from "@material-ui/core";
import { Styles } from "./Styles"
import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";

const SearchModal = ({ classes }) => {
    let [isOpen, toggle] = useState(false);
    let handleClose = e => toggle(false);
    let toggleModal = _ => toggle(!isOpen);
    let [trip, setTrip] = useState(0);

    let changeTrip = (e, newValue) => setTrip(newValue);
    console.log({ trip })
    return (
        <ErrorBoundary>
        <div className={classes.modalLinkContainer}>
            <Typography variant="caption">Not what you are looking for? <a href="#" onClick={toggleModal}>Try your search again</a></Typography>
            <Dialog open={isOpen} onClose={handleClose} >
                <DialogTitle>
                    Search for Bus
                </DialogTitle>
                <DialogContent>

                    <Grid container direction="col">
                        <Grid item xs={12}>
                            <Tabs
                                value={trip}
                                onChange={changeTrip}
                                variant="fullWidth"
                                textColor="secondary"
                                indicatorColor="primary"
                            >
                                <Tab label="Round trip" />
                                <Tab label="One way" />
                            </Tabs>
                        </Grid>
                    </Grid>

                    {/**Form */}
                    <form className={classes.section}>
                        <Grid container spacing={2} direction="col" className={classes.formContainer}>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField label="From" type="text" placeholder="City" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField label="To" type="text" placeholder="City" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <TextField label="Departing" type="text" />
                            </Grid>
                            {trip === 0 ?
                                <Grid item xs={12} sm={12} md={3}>
                                    <TextField label="Returning" type="text" value="" />
                                </Grid> :
                                null
                            }

                            <Grid item xs={12} sm={12} md={6}>
                                <InputLabel htmlFor="name-native-disabled">Passenger</InputLabel>
                                <Select className={classes.block}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                    <MenuItem value="6">6</MenuItem>
                                    <MenuItem value="7">7</MenuItem>
                                    <MenuItem value="8">8</MenuItem>
                                    <MenuItem value="9">9</MenuItem>
                                    <MenuItem value="10">10</MenuItem>
                                    <MenuItem value="11">11</MenuItem>
                                    <MenuItem value="12">12</MenuItem>
                                    <MenuItem value="13">13</MenuItem>
                                    <MenuItem value="14">14</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Button color="primary" variant="contained" className={classes.section}> Search</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
        </ErrorBoundary>
    )
}

export default withStyles(Styles)(SearchModal);