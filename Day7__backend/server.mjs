// server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql';
import cors from 'cors';

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());


const dbConfig = {
  server: '10.1.8.47', 
  port: 1433, 
  user: 'intern',
  password: 'intern@4321',
  database: 'TestDB',
  options: {
    encrypt: true, 
    trustServerCertificate: true,
    enableArithAbort: true
  }
};

sql.connect(dbConfig)
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => console.error('Connection failed: ', err));


app.post('/submit-form', async (req, res) => {
  const {
    name, email, course, fatherName, cnic,
    address, totalMatricMarks, obtainedMatricMarks,
    totalInterMarks, obtainedInterMarks, cellNo, phoneNo
  } = req.body;

  try {
    console.log('Received form data:', {
      name, email, course, fatherName, cnic,
      address, totalMatricMarks, obtainedMatricMarks,
      totalInterMarks, obtainedInterMarks, cellNo, phoneNo
      });

          const request = new sql.Request();
        request.input('name', sql.VarChar, name);
        request.input('email', sql.VarChar, email);
        request.input('course', sql.VarChar, course);
        request.input('fatherName', sql.VarChar, fatherName);
        request.input('cnic', sql.VarChar, cnic);
        request.input('address', sql.VarChar, address);
        request.input('totalMatricMarks', sql.Int, totalMatricMarks);
        request.input('obtainedMatricMarks', sql.VarChar, obtainedMatricMarks);
        request.input('totalInterMarks', sql.Int, totalInterMarks);
        request.input('obtainedInterMarks', sql.Int, obtainedInterMarks);
        request.input('cellNo', sql.VarChar, cellNo);
        request.input('phoneNo', sql.VarChar, phoneNo);

    await request.query(`
      INSERT INTO admissions (Name, Email, Course, FatherName, CNIC, Address, TotalMatricMarks, ObtainedMatricMarks, TotalInterMarks, ObtainedInterMarks, CellNo, PhoneNo)
      VALUES (@name, @email, @course, @fatherName, @cnic, @address, @totalMatricMarks, @obtainedMatricMarks, @totalInterMarks, @obtainedInterMarks, @cellNo, @phoneNo);
    `);
    res.status(200).send('Form submitted successfully');
  }
  
  catch (err) {
    console.error(err);
    res.status(500).send('Error processing form data');
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));