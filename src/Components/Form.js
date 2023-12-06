import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

// TODO: use request defualt library to consume API

const Form = () => {
    const [inputValue, setInputValue] = useState({
        'email': null,
        'subject': null,
        'message': null
    });

    const [errorMessage, setErrorMessage] = useState({
        'email': null,
        'message': null
    })

    const handleChangeEmail = (e) => {
        setInputValue(  prevInput => {
            return { ...prevInput, email: e.target.value };
        })
        console.log(inputValue)
    }

    const handleChangeSubject = (e) => {
        setInputValue(  prevInput => {
            return { ...prevInput, subject: e.target.value };
        })
        console.log(inputValue)
    }

    const handleChangeMessage = (e) => {
        setInputValue(  prevInput => {
            return { ...prevInput, message: e.target.value };
        })
        console.log(inputValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(null)
        //TODO: Correct this Error
        if(!isValidEmail(inputValue.email) || inputValue.message !== null){
            if(!isValidEmail(inputValue.email)){
                setErrorMessage(prevError => {
                    return{...prevError, email: "Email Is not valid"}
                })
            }
            if(inputValue.message !== null){
                setErrorMessage(prevError => {
                    return{...prevError, message: "You should type a message"}
                })
            }
        }
        //TODO: handle submission value from input values
        else{
            console.log(inputValue)
        }
        // TODO: make a handle submit backend information
    }

    const isValidEmail = (value) =>{
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(value);
    }

    return  <Box
            component="form"
            className='form-box'
            onSubmit={handleSubmit}
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <label className='error'>
                    { errorMessage.email !== null? `${errorMessage.email}` : `` }
                </label>
                <TextField
                id="email"
                type='emial'
                className='form'
                label="E-mial"
                variant="outlined"
                defaultValue={inputValue.email}
                onChange={handleChangeEmail}
                required/>

                <TextField
                id="subject"
                className='form'
                label="Subject"
                defaultValue={inputValue.subject}
                onChange={handleChangeSubject}
                variant="outlined" />

                <label className='error'>
                    { errorMessage.message !== null? `${errorMessage.message}` : `` }
                </label>
                <TextField
                id="message"
                className='form'
                label="Message"
                defaultValue={inputValue.message}
                onChange={handleChangeMessage}
                variant="outlined"
                multiline
                required
                InputProps={{
                    rows: 3
                }} />
                <Button
                type='submit'
                variant="outlined"
                className='form'
                color="primary">Hire me!</Button>
            </Box>
}

export default Form;