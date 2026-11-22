const cors = require("cors");
const db = require("./db");
require("dotenv").config();
const express = require("express");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! Backend is working.");
});

app.get("/students", (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Error fetching students",
                error: error.message
            });
        }

        res.status(200).json(results);
    });
});

    
    
    app.post("/students", (req, res) => {
    const { name, fatherName, email, mobile, course } = req.body;

    const sql = `
        INSERT INTO students (name, fatherName, email, mobile, course)
        VALUES (?, ?, ?, ?, ?)
    `;

    const values = [name, fatherName, email, mobile, course];

    db.query(sql, values, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Error adding student",
                error: error.message
            });
        }

        res.status(201).json({
            message: "Student added successfully!",
            studentId: results.insertId
        });
    });
});

    // Update Student
app.put("/students/:id", (req, res) => {
    const { id } = req.params;

    const { name, fatherName, email, mobile, course } = req.body;

    const sql = `
        UPDATE students
        SET name = ?, fatherName = ?, email = ?, mobile = ?, course = ?
        WHERE id = ?
    `;

    const values = [name, fatherName, email, mobile, course, id];

    db.query(sql, values, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Error updating student",
                error: error.message
            });
        }

        res.status(200).json({
            message: "Student updated successfully!"
        });
    });
});

    app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Error deleting student",
                error: error.message
            });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully!"
        });
    });
});

    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });