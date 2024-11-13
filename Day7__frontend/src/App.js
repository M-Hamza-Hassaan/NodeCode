import React, { useState } from 'react';

const Form = ({ formData, handleChange, formFields }) => (
  <div>
    {formFields.map((field) => (
      <input
        key={field.name}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={formData[field.name]}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }}
      />
    ))}
  </div>
);

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', course: '', fatherName: '', cnic: '',
    address: '', totalMatricMarks: '', obtainedMatricMarks: '',
    totalInterMarks: '', obtainedInterMarks: '', cellNo: '', phoneNo: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:8000/api/submit-form', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        setFormData({
          name: '', email: '', course: '', fatherName: '', cnic: '',
          address: '', totalMatricMarks: '', obtainedMatricMarks: '',
          totalInterMarks: '', obtainedInterMarks: '', cellNo: '', phoneNo: ''
        });
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Failed to submit form.');
      }
    } catch (error) {
      setStatus('An error occurred while submitting the form.');
    }

    setIsLoading(false);
  };

  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'course', type: 'text', placeholder: 'Course' },
    { name: 'fatherName', type: 'text', placeholder: 'Father Name' },
    { name: 'cnic', type: 'text', placeholder: 'CNIC' },
    { name: 'address', type: 'text', placeholder: 'Address' },
    { name: 'totalMatricMarks', type: 'number', placeholder: 'Total Matric Marks' },
    { name: 'obtainedMatricMarks', type: 'number', placeholder: 'Obtained Matric Marks' },
    { name: 'totalInterMarks', type: 'number', placeholder: 'Total Inter Marks' },
    { name: 'obtainedInterMarks', type: 'number', placeholder: 'Obtained Inter Marks' },
    { name: 'cellNo', type: 'tel', placeholder: 'Cell No' },
    { name: 'phoneNo', type: 'tel', placeholder: 'Phone No' }
  ];

  return (
<form onSubmit={handleSubmit} 
  style={{
    background: '#f4f7fa', 
    maxWidth: '450px', 
    margin: '5% auto', 
    padding: '30px', 
    border: '1px solid #ccc', 
    borderRadius: '12px', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  }}>
  <h2 style={{
    textAlign: 'center', 
    color: '#007bff', 
    fontSize: '24px', 
    marginBottom: '20px'
  }}>Admission Form</h2>
  
  <Form formData={formData} handleChange={handleChange} formFields={formFields} />
  
  <button
    type="submit"
    disabled={isLoading}
    style={{
      width: '100%', 
      padding: '12px', 
      backgroundColor: '#007bff',
      color: '#fff', 
      border: 'none', 
      borderRadius: '6px', 
      cursor: isLoading ? 'not-allowed' : 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
      fontWeight: 'bold'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
  >
    {isLoading ? 'Submitting...' : 'Submit'}
  </button>

  <p style={{
    marginTop: '15px', 
    textAlign: 'center', 
    fontSize: '14px', 
    color: status.includes('successfully') ? 'green' : 'red'
  }}>
    {status}
  </p>
</form>

  );
}
