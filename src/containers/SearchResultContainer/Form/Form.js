import React from 'react'
import { TextField, MenuItem, Select, Grid, InputLabel, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    let { classes, data: { from, to, noOfPassengers, date } } = props;
    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item xs={11} >
                    <Paper elevation={2}>
                        <form onSubmit={handleSubmit} >
                            <Grid container spacing={2} direction="row" className={classes.formContainer}>
                                <Grid item xs={12} sm={12} md={2}>
                                    <TextField label="From" type="text" disabled value={from} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={2}>
                                    <TextField label="To" type="text" disabled value={to}></TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} md={2}>
                                    <TextField label="Departing" type="text" disabled value={date}></TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} md={2}>
                                    <InputLabel htmlFor="name-native-disabled">Passenger</InputLabel>
                                    <Select disabled className={classes.block} defaultValue={noOfPassengers}>
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
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(Styles)(Form);