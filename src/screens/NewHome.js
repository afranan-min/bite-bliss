import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewHome() {
  const navigate = useNavigate();

  const styles = {
    app: {
      textAlign: 'center',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    },
    background: {
      backgroundImage: 'url("https://i2-prod.manchestereveningnews.co.uk/incoming/article26983805.ece/ALTERNATES/s615b/1_36F33AC1-9911-4A0D-9B34-0760FD1186EEjpeg.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(50%)', // Adjust brightness for transparency effect
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      zIndex: -1,
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    buttonContainer: {
      marginTop: '20px',
    },
    button: {
      backgroundColor: 'white', // Semi-transparent white background
      color: 'black', // Black text
      border: 'none',
      padding: '10px 20px',
      margin: '0 10px',
      cursor: 'pointer',
      fontSize: '20px',
      borderRadius: '15px',
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.background}></div>
      <div style={styles.overlay}></div>
      <header style={styles.header}>
        <h1>Welcome to BiteBliss</h1>
        <div style={styles.buttonContainer}>
          <button
            onClick={() => navigate('/admin')}
            style={styles.button}
          >
            Admin
          </button>
          <button
            onClick={() => navigate('/buyer')}
            style={styles.button}
          >
            Buyer
          </button>
        </div>
      </header>
    </div>
  );
}

export default NewHome;
