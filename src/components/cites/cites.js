import React, {Component} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import './cites.css';

function returnCite(num){
    let string;
    switch(num){
        case 1: string = 'Bavaro'; break;
        case 2: string = 'CAP Cana'; break;
        case 3: string = 'Bayahibe'; break;
        case 4: string = 'Romana'; break;
        case 6: string = 'Gran SDO'; break;
        case 7: string = 'SDO - Miche'; break;
        case 8: string = 'SDO - CAP Cana'; break;
        case 9: string = 'SDO - Bayahibe'; break;
        case 10: string = 'SDO - Romana'; break;
        case 11: string = 'SDO - Bavaro'; break;
        case 12: string = 'Otro'; break;
    }
    return string;
}
const lenguajes =  
[
    {
        date: 'Selecciona la fecha',
        time: 'Selecciona la hora',
        destiny: 'Destino',
        button: 'Reservar',
        other: 'Otro'
    },
    {
        date: 'Select the date',
        time: 'Select the time',
        destiny: 'Destination',
        button: 'Reserve',
        other: 'Other'
    },
    {
        date: 'Выберите дату',
        time: 'Выберите час',
        destiny: 'Назначения',
        button: 'бронировать',
        other: 'Другие'
    }
]

export default class SelectCit extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date('2021-01-01T00:00:54'),
            age: -1
        }
    }
    handleDateChange = (props) =>{
        this.setState({date: props})
    }
    submitForm = () =>{
        if(this.state.age !== -1){
            let toencode = "Startrips Punta cana - Deseo reservar el servicio : (" + returnCite(this.state.age) + "), para la fecha (" + this.state.date + ")";
            window.location.href = `https://api.whatsapp.com/send?phone=+18093594681&text=${encodeURIComponent(toencode)}`
        }
    }
    render(){
        return(
            <div className="card">
                <form>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid>
                            <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="dense"
                                    id="date-picker-dialog"
                                    label={lenguajes[this.props.lenguaje].date}
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'Cambiar fecha',
                                    }}
                            />
                                    
                            <KeyboardTimePicker
                                    margin="dense"
                                    id="time-picker"
                                    label={lenguajes[this.props.lenguaje].time}
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'Cambiar hora',
                                    }}
                             />
                            <div className="w-10 inline-item w-100-responsive">
                                <InputLabel className="inline-item" id="demo-simple-select-helper-label">{lenguajes[this.props.lenguaje].destiny}</InputLabel>
                                <Select
                                            className="inline-item"
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select"
                                            value={this.state.age}
                                            
                                            onChange={(value) => this.setState({age: value.target.value})}
                                    >

                                    <MenuItem value={1}>Bavaro</MenuItem>
                                    <MenuItem value={2}>CAP Cana</MenuItem>
                                    <MenuItem value={3}>Bayahibe</MenuItem>
                                    <MenuItem value={4}>Romana</MenuItem>
                                    <MenuItem value={6}>Gran SDO</MenuItem>
                                    <MenuItem value={7}>SDO - Miche</MenuItem>
                                    <MenuItem value={8}>SDO - CAP Cana</MenuItem>
                                    <MenuItem value={9}>SDO - Bayahibe</MenuItem>
                                    <MenuItem value={10}>SDO - Romana</MenuItem>
                                    <MenuItem value={11}>SDO - Bavaro</MenuItem>
                                    <MenuItem value={12}>{lenguajes[this.props.lenguaje].other}</MenuItem>
                                </Select>
                            </div>
                            <button type="button" onClick={this.submitForm} className="button-reservar"> {lenguajes[this.props.lenguaje].button}</button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </form>
            </div>
        )
    }
}

