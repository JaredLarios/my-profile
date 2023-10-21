import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

const Form = () => {
    return  <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField 
                id="email" 
                label="E-mial" 
                variant="outlined"
                required/>

                <TextField 
                id="subject" 
                label="Subject" 
                variant="outlined" />

                <TextField 
                id="message" 
                label="Message" 
                variant="outlined" 
                multiline
                InputProps={{
                    rows: 3
                }} />
                <Button variant="outlined" color="primary">Hire me!</Button>
            </Box>
}
 
export default Form;