const db = require('../config/db');

exports.getEmployees = (req, res) => {

    db.query("SELECT * FROM employees", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

exports.addEmployee = (req, res) => {

    const { name, department } = req.body;

    db.query(
        "INSERT INTO employees(name, department) VALUES (?, ?)",
        [name, department],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Added"
            });

        }
    );

};
