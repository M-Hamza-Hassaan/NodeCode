import React, { useState } from 'react';

export function AdmissionForm() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
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
      const response = await fetch('http://localhost:5000/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', course: '' }); 
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Failed to submit form.');
      }
    } catch (error) {
      setStatus('An error occurred while submitting the form.');
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} 
      style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Admission Form</h2>
      
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }}
        />
      
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }}
        />
      
      
        <input
          type="text"
          name="course"
          placeholder="course"
          value={formData.course}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }}
        />
      
      
      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer'
        }}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      
      <p style={{ marginTop: '10px', color: status.includes('successfully') ? 'green' : 'red' }}>{status}</p>
    </form>
  );
}
