const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const employees = [
    {
        id: 1,
        name: "John",
        department: "IT"
    },
    {
        id: 2,
        name: "Alice",
        department: "HR"
    }
];

// Home API
app.get('/', (req, res) => {
    res.send("Employee Management API is Running");
});

// Get all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// Add employee
app.post('/employees', (req, res) => {
    const employee = req.body;
    employee.id = employees.length + 1;
    employees.push(employee);
    res.status(201).json(employee);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
