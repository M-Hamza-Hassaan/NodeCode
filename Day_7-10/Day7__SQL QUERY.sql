CREATE TABLE hamzaJani (
    Id INT PRIMARY KEY IDENTITY(1,1), 
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Course NVARCHAR(100),
    FatherName NVARCHAR(100),
    CNIC NVARCHAR(15), 
    Address NVARCHAR(255),
    TotalMatricMarks INT,
    ObtainedMatricMarks INT,
    TotalInterMarks INT,
    ObtainedInterMarks INT,
    CellNo NVARCHAR(15), 
    PhoneNo NVARCHAR(15)
);


