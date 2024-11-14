import React, { useState } from 'react';

const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundImage: 'url("https://umich.edu/includes/image/?type=gallery&id=9&name=DIL-17Apr12-Slideshow%28033%29.jpg&width=2500")', // Replace with university image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(2px)',
  },
  formCard: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '30px',
    width: '100%',
    maxWidth: '1000px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '32px',
    color: '#1a56db',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    marginTop: 0,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    padding: '10px 16px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    transition: 'all 0.2s ease',
  },
  submitButton: {
    gridColumn: '1 / -1',
    backgroundColor: '#1a56db',
    color: 'white',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    marginTop: '16px',
  },
  disabledButton: {
    backgroundColor: '#93c5fd',
    cursor: 'not-allowed',
  },
  status: {
    textAlign: 'center',
    padding: '12px',
    borderRadius: '6px',
    marginTop: '16px',
    gridColumn: '1 / -1',
  },
  successStatus: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  errorStatus: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
  loadingSpinner: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    border: '2px solid #ffffff',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    marginRight: '8px',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
  '@media (max-width: 768px)': {
    form: {
      gridTemplateColumns: '1fr',
    },
    formCard: {
      padding: '20px',
    },
  },
};

const FormField = ({ label, ...props }) => (
  <div style={styles.formGroup}>
    <label style={styles.label}>{label}</label>
    <input
      style={{
        ...styles.input,
        ':focus': {
          borderColor: '#1a56db',
          boxShadow: '0 0 0 3px rgba(26, 86, 219, 0.1)',
          outline: 'none',
        },
      }}
      {...props}
    />
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

  return (
    <div style={styles.pageContainer}>
      <div style={styles.overlay} />
      <div style={styles.formCard}>
        <div style={styles.header}>
          <h1 style={styles.title}>Admission Form</h1>
          <p style={styles.subtitle}>Please fill in all the required information</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <FormField
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
          
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <FormField
            label="Course"
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            placeholder="Select course"
          />

          <FormField
            label="Father's Name"
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
            placeholder="Enter father's name"
          />

          <FormField
            label="CNIC"
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
            placeholder="Enter CNIC number"
          />

          <FormField
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
          />

          <FormField
            label="Total Matric Marks"
            type="number"
            name="totalMatricMarks"
            value={formData.totalMatricMarks}
            onChange={handleChange}
            required
            placeholder="Enter total marks"
          />

          <FormField
            label="Obtained Matric Marks"
            type="number"
            name="obtainedMatricMarks"
            value={formData.obtainedMatricMarks}
            onChange={handleChange}
            required
            placeholder="Enter obtained marks"
          />

          <FormField
            label="Total Inter Marks"
            type="number"
            name="totalInterMarks"
            value={formData.totalInterMarks}
            onChange={handleChange}
            required
            placeholder="Enter total marks"
          />

          <FormField
            label="Obtained Inter Marks"
            type="number"
            name="obtainedInterMarks"
            value={formData.obtainedInterMarks}
            onChange={handleChange}
            required
            placeholder="Enter obtained marks"
          />

          <FormField
            label="Cell Number"
            type="tel"
            name="cellNo"
            value={formData.cellNo}
            onChange={handleChange}
            required
            placeholder="Enter cell number"
          />

          <FormField
            label="Phone Number"
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />

          {status && (
            <div 
              style={{
                ...styles.status,
                ...(status.includes('successfully') ? styles.successStatus : styles.errorStatus),
              }}
            >
              {status}
            </div>
          )}

          <button
            type="submit"
            style={{
              ...styles.submitButton,
              ...(isLoading ? styles.disabledButton : {}),
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span style={styles.loadingSpinner} />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;