import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '12345') {
      navigate('/admin/options');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body text-center">
          <h2 className="card-title" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Welcome to Admin Entrance</h2>
          <form onSubmit={handlePasswordSubmit} className="mb-3">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Enter Password:12345</label>
              <input 
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn" 
              style={{ backgroundColor: 'white', borderColor: 'black', color: 'black', borderWidth: '2px' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
