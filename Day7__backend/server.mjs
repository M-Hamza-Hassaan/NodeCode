import express from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql';
import cors from 'cors';

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());


const dbConfig = {
  user: 'inter', 
  password: 'inter@4321', 
  server: 'http://localhost:3000', 
  database: 'TestDB', 
  options: { encrypt: true, trustServerCertificate: true }, 
};

sql.connect(dbConfig)
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => console.error('Connection failed: ', err));

app.post('/submit-form', async (req, res) => {
  const { name, email, course } = req.body;

  try {
    
    console.log('Received form data:', { name, email, course });

    // This section would be responsible for database insertion if credentials were provided
    // const request = new sql.Request();
    // await request.query(
    //   `INSERT INTO Admissions (Name, Email, Course) VALUES ('${name}', '${email}', '${course}')`
    // );

    res.status(200).send('Form submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing form data');
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
