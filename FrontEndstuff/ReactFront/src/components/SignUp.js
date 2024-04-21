import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import teal from '@mui/material/colors/teal';
import { grey } from '@mui/material/colors';
import logo from './lines.png';  // Importing the logo image

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: teal[500], // Adjusted for a toned-down teal
    },
    secondary: {
      main: grey[900], // A dark shade for text for better legibility
    },
    background: {
      default: '#f4f6f8', // A softer background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners for input fields
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // More rounded corners for buttons
        },
      },
    },
  },
  shape: {
    borderRadius: 8, // Adjust the border-radius for card and other components
  },
  shadows: ['none', '0px 2px 4px rgba(0,0,0,0.1)'], // Subtle shadows
});

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', {
        username,
        email,
        password,
      });
      console.log(response.data);
      // Redirect to login page or chat interface
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., display an error message)
    }
  };

  return (
    <Box className="signUpBox">
      <img src={logo} alt="Logo" style={{ maxWidth: '80px', height: 'auto', marginBottom: '20px' }} />
      <Typography component="h1" variant="h5" color="secondary">
        Sign Up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3, width: '100%' }}>
        <TextField
          autoComplete="username"
          name="username"
          required
          fullWidth
          id="username"
          label="Username"
          autoFocus
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2, py: 1, borderRadius: 20 }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;

