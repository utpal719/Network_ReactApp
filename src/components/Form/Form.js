import React from 'react'
import { TextField, MenuItem, Button, Select, Grid, OutlinedInput, InputLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const { classes } = props;
    return (
        <div className={classes.bg}>
            <Grid container spacing={2} className={classes.gridstyle}>
                <Grid item xs={6} >
                    ONLINE BUS TICKET
					<br />
                    <br />

                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={6}>
                                <InputLabel >From</InputLabel>
                                <OutlinedInput label="Select City Name" type="text" className={classes.inputbox} />
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel>To</InputLabel>
                                <OutlinedInput label="Select City Name" type="text" className={classes.inputbox}></OutlinedInput>
                                <br />
                            </Grid>
                        </Grid>
                        <Grid container spacing={4} direction="row">
                            <Grid item xs={6}>
                                <InputLabel>Departing</InputLabel>
                                <TextField type="date" className={classes.inputbox}></TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel>Passengers</InputLabel>
                                <Select className={classes.inputbox}>
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
                        <br />
                        <Button type="submit" >Search Buses</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(Styles)(Form);