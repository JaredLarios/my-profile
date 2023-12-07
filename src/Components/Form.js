import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { URL } from '../Api/client'

// TODO: use request defualt library to consume API

const Form = () => {
    const [inputValue, setInputValue] = useState({
        'email': null,
        'subject': null,
        'message': null
    });

    const [errorMessage, setErrorMessage] = useState({
        'email': '',
        'message': ''
    });

    const [dResponse, setResponse] = useState(null);

    useEffect(() => {
        // Log the value of dResponse whenever it changes
        console.log('response: '+dResponse);
    }, [dResponse]);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInputValue(  prevInput => ({
            ...prevInput,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(null)
        //TODO: Correct this Error
        if(!isValidEmail(inputValue.email) || inputValue.message === null){
            if(!isValidEmail(inputValue.email)){
                setErrorMessage(prevError => {
                    return{...prevError, email: "Email Is not valid"}
                })
            }
            if(inputValue.message === null){
                setErrorMessage(prevError => {
                    return{...prevError, message: "You should type a message"}
                })
            }
        }
        else{
            sendMessage(inputValue);
            setInputValue({
                'email': null,
                'subject': null,
                'message': null
            })
        }
    }

    const isValidEmail = (value) =>{
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(value);
    }

    const sendMessage = async (data) =>{
        try{
            const response = await fetch(
                `${URL}message/send`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: data.email,
                        subject: data.subject,
                        message: data.message,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
            })

            setResponse(response.status);
            const resData = await response.json();
            console.log(resData)
        }
        catch(err) {
            console.log(err.message);
        };
    }

    const handleClear = (e) => setResponse(null)

    const responseMessage = () => {

        if( dResponse >= 200 & dResponse < 300 ){
            return  <div className='success'>
                                <p>Message was sent!</p>
                                <span onClick={handleClear}>X</span></div>
        } else if ( dResponse >= 400 & dResponse < 500 ){
            return <p className='err'>
                                Error {dResponse} try again.
                                <span onClick={handleClear}>x</span></p>
        } else if ( dResponse >= 500 & dResponse < 600 ){
            return <p className='err'>
                                Error {dResponse} Couldn't reach server.
                                <span onClick={handleClear}>x</span></p>
        }
        else{
            return <></>
        }
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
                { responseMessage() }
                <p className='error'>
                    { errorMessage?.email || '' ? `${errorMessage.email}` : `` }
                </p>
                <TextField
                id="email"
                type='email'
                className='form'
                label="E-mail"
                variant="outlined"
                value={inputValue.email === null ? '' : inputValue.email}
                onChange={handleChange}
                required/>

                <TextField
                id="subject"
                className='form'
                label="Subject"
                value={inputValue.subject === null ? '' : inputValue.subject}
                onChange={handleChange}
                variant="outlined" />

                <p className='error'>
                    { errorMessage?.message || '' ? `${errorMessage.message}` : `` }
                </p>
                <TextField
                id="message"
                className='form'
                label="Message"
                value={inputValue.message === null ? '' : inputValue.message}
                onChange={handleChange}
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