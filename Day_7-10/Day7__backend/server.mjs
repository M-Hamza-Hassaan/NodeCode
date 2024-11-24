// server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// MSSQL Database Configuration
const dbConfig = {
  server: '10.1.8.47',
  port: 1433,
  user: 'intern',
  password: 'intern@4321',
  database: 'TestDB',
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};

// Create a reusable database connection pool
let pool;
(async () => {
  try {
    pool = await sql.connect(dbConfig);
    console.log('Connection to MSSQL database successful!');
  } catch (err) {
    console.error('Database connection error:', err);
  }
})();

// Endpoint to handle form submission
app.post('/api/submit-form', async (req, res) => {
  const {
    name, email, course, fatherName, cnic,
    address, totalMatricMarks, obtainedMatricMarks,
    totalInterMarks, obtainedInterMarks, cellNo, phoneNo,
  } = req.body;

  try {
    console.log('Received form data:', {
      name, email, course, fatherName, cnic,
      address, totalMatricMarks, obtainedMatricMarks,
      totalInterMarks, obtainedInterMarks, cellNo, phoneNo,
    });

    // Use the pool connection to insert data into the database
    const result = await pool.request()
      .input('name', sql.VarChar, name)
      .input('email', sql.VarChar, email)
      .input('course', sql.VarChar, course)
      .input('fatherName', sql.VarChar, fatherName)
      .input('cnic', sql.VarChar, cnic)
      .input('address', sql.VarChar, address)
      .input('totalMatricMarks', sql.Int, totalMatricMarks)
      .input('obtainedMatricMarks', sql.Int, obtainedMatricMarks)
      .input('totalInterMarks', sql.Int, totalInterMarks)
      .input('obtainedInterMarks', sql.Int, obtainedInterMarks)
      .input('cellNo', sql.VarChar, cellNo)
      .input('phoneNo', sql.VarChar, phoneNo)
      .query(`
        INSERT INTO dbo.hamzaJani (Name, Email, Course, FatherName, CNIC, Address, TotalMatricMarks, ObtainedMatricMarks, TotalInterMarks, ObtainedInterMarks, CellNo, PhoneNo)
        VALUES (@name, @email, @course, @fatherName, @cnic, @address, @totalMatricMarks, @obtainedMatricMarks, @totalInterMarks, @obtainedInterMarks, @cellNo, @phoneNo);
      `);

    res.status(200).send('Form submitted successfully');
  } catch (err) {
    console.error('Error processing form data:', err);
    res.status(500).send('Error processing form data');
  }
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
