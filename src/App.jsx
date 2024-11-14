import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Slider } from '@mui/material';

function App() {
  const [electricity, setElectricity] = useState('');
  const [car, setCar] = useState('');
  const [flight, setFlight] = useState('');
  const [meat, setMeat] = useState('');
  const [total, setTotal] = useState(null);
  const [target, setTarget] = useState(100); // Initial target is set to 100%

  const calculateCarbon = () => {
    const carbonElectricity = electricity * 0.453;
    const carbonCar = car * 0.2;
    const carbonFlight = flight * 0.115;
    const carbonMeat = meat * 0.027;

    const totalCarbon = carbonElectricity + carbonCar + carbonFlight + carbonMeat;
    setTotal(totalCarbon);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        width: '100vw',
        paddingTop: '50px', // Added top padding
        paddingBottom: '50px' // Added bottom padding
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <img 
            src="./images (3).jfif" 
            alt="Eco Image" 
            style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} 
          />
          
          <Typography variant="h3" gutterBottom sx={{ color: '#2e7d32' }}>
            Carbon Footprint Calculator
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: '#4caf50' }}>
            Calculate and reduce your environmental impact
          </Typography>

          <TextField
            label="Daily Electricity Consumption (kWh)"
            type="number"
            fullWidth
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Daily Car Usage (km)"
            type="number"
            fullWidth
            value={car}
            onChange={(e) => setCar(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Annual Flight Distance (km)"
            type="number"
            fullWidth
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Daily Meat Consumption (grams)"
            type="number"
            fullWidth
            value={meat}
            onChange={(e) => setMeat(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <Typography id="input-slider" gutterBottom sx={{ color: '#388e3c' }}>
            Carbon Reduction Target: {target}%
          </Typography>
          <Slider
            value={target}
            onChange={(e, newValue) => setTarget(newValue)}
            aria-labelledby="input-slider"
            min={0}
            max={100}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}%`}
            sx={{ mb: 2 }}
          />
          
          <Button variant="contained" color="success" fullWidth onClick={calculateCarbon}>
            Calculate
          </Button>

          {total !== null && (
            <Box sx={{ mt: 3, backgroundColor: '#f1f8e9', borderRadius: '10px', padding: '10px' }}>
              <Typography variant="h6">Total Carbon Footprint: {total.toFixed(2)} kg CO2</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Focus on reducing your footprint by {target}%!
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
