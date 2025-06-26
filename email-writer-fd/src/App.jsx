

import { useState } from 'react';
import './App.css';
import {
  Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem,
  Select, TextField, Typography, Paper, Switch
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import axios from 'axios';

const GlassBox = styled(Paper)(({ theme }) => ({
  backdropFilter: 'blur(14px)',
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 30, 30, 0.4)'
    : 'rgba(255, 255, 255, 0.25)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 40px rgba(0, 0, 0, 0.6)'
    : '0 10px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'all 0.5s ease',
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: '#90caf9',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("https://replyaura-bd.onrender.com/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <div className="sparkle-bg"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant='h4' fontWeight="bold">
              ✉️ Email Reply Generator
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">🌞</Typography>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <Typography variant="body2">🌙</Typography>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GlassBox elevation={3} sx={{ mt: 4 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              label="📩 Original Email Content"
              variant="outlined"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': { borderRadius: '14px' },
              }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Tone (Optional)</InputLabel>
              <Select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                label="Tone"
                sx={{ borderRadius: '14px' }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>

            <Button
              fullWidth
              size="large"
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              variant="contained"
              sx={{
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: '14px',
                background: darkMode
                  ? 'linear-gradient(45deg, #00c6ff, #0072ff)'
                  : 'linear-gradient(45deg, #2196F3, #21CBF3)',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 0 10px rgba(33,203,243,0.5)'
                }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "🚀 Generate Reply"}
            </Button>

            {error && (
              <Typography color='error' sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </GlassBox>
        </motion.div>

        {generatedReply && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <GlassBox elevation={2} sx={{ mt: 4 }}>
              <Typography variant='h6' gutterBottom>
                ✅ Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant='outlined'
                value={generatedReply}
                inputProps={{ readOnly: true }}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '14px' } }}
              />
              <Button
                variant='outlined'
                onClick={() => navigator.clipboard.writeText(generatedReply)}
                sx={{
                  mt: 2,
                  borderRadius: '14px',
                  fontWeight: 'bold',
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: darkMode ? '#333' : '#e3f2fd',
                    borderColor: theme.palette.primary.dark
                  }
                }}
              >
                📋 Copy to Clipboard
              </Button>
            </GlassBox>
          </motion.div>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
