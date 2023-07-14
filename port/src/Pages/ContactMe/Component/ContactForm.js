import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { withTheme } from '@emotion/react';

export default function FormPropsTextFields() {
 
    return (
      
        <Box 
          component="form"
          sx={{
            display: 'flex',
            
      justifyContent: 'center',
      height: '100%',
            '& .MuiTextField-root': { m: 5, 
              width: '1000px',   
             display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10%',
            background: 'white',
          fontSize: 50,
           },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField 
           
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
              
             
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
            />
             <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Message"
            />
          </div>
        </Box>
        
      );
    }