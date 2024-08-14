import React from 'react';
import { Link } from 'react-router-dom';

function AdminOptions() {
  const styles = {
    app: {
      textAlign: 'center',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    },
    background: {
      backgroundImage: 'url("https://cdn.phonebooky.com/blog/wp-content/uploads/2023/11/07165909/ampersand-cover.jpg")',
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
    button: {
      backgroundColor: 'white', // Background color for buttons
      color: 'black', // Black text
      padding: '10px 20px',
      margin: '0 10px',
      cursor: 'pointer',
      fontSize: '20px',
      borderRadius: '15px',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.background}></div>
      <div style={styles.overlay}></div>
      <header style={styles.header}>
      <h2 style={{ marginBottom: '40px' }}>Admin Options Available</h2>
        <div>
          <Link to="/admin/add-category" style={styles.button}>
            Add Category
          </Link>
          <Link to="/admin/add-food-items" style={styles.button}>
            Add Food Items
          </Link>
          <Link to="/admin/show-orders" style={styles.button}>
            Show Orders
          </Link>
        </div>
      </header>
    </div>
  );
}

export default AdminOptions;
