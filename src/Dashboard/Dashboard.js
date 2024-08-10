import React from 'react';
import { Box, Grid, Paper, Typography, MenuItem, Select, FormControl, InputLabel, TextField } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './Dashboard.css';
import Highlightevents from '../Highlights/Highlightevents';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box className="dashboard-container">
      <Sidebar />
      <Box className="main-content">
        <Box p={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4">Admin Dashboard</Typography>
            <Box display="flex" alignItems="center">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  renderInput={(props) => <TextField {...props} />}
                />
                <DatePicker
                  label="End Date"
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={2.8}>
              <Paper className="stat-card">
                <Typography variant="h3">360</Typography>
                <Typography>Volunteers Volunteered</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2.8}>
              <Paper className="stat-card">
                <Typography variant="h3">102.8</Typography>
                <Typography>Hours Volunteered</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2.8}>
              <Paper className="stat-card">
                <Typography variant="h3">58</Typography>
                <Typography>Events Attended</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2.8}>
              <Paper className="stat-card">
                <Typography variant="h3">$2,191</Typography>
                <Typography>Economic Impact</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={6}>
            <Grid item xs={11} md={7}>
              <Paper className="chart">
                <Typography variant="h6">Event Attendance Activity</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} >
              <Paper className="top-volunteers">
                <Typography variant="h6">Top Volunteers</Typography>
                <Highlightevents />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={3}>
            <Grid item xs={12} md={6}>
              <Paper className="volunteer-activity">
                <Typography variant="h6">Volunteers Event Activity</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper className="additional-stats">
                <Typography variant="h6">Additional Volunteering Statistics</Typography>
                <br></br>
                <h3>1. Volunteers are worth $28.54 per hour on average.</h3><br></br>
<h3> 2. Volunteers are almost twice as likely to donate to a charity compared to people who don't donate.</h3><br></br>
<h3>3. 96% of volunteers believe that their volunteer work improved their sense of purpose in life.</h3>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
