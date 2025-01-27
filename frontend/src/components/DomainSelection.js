import React from 'react';
import '../styles/DomainSelection.css'; // Import the CSS file

function DomainSelection() {
  const navigateTo = (domain) => {
    switch (domain) {
      case 'user':
        window.location.href = '/user-login';
        break;
      case 'mentor':
        window.location.href = '/mentor-login';
        break;
      case 'admin':
        window.location.href = '/admin-login';
        break;
      default:
        alert('Invalid selection!');
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Sakhi Sampatti</h1>
      <p>Please select your domain to log in:</p>
      <div className="domain-selection">
        <button onClick={() => navigateTo('user')}>User Login</button>
        <button onClick={() => navigateTo('mentor')}>Mentor Login</button>
        <button onClick={() => navigateTo('admin')}>Admin Login</button>
      </div>
    </div>
  );
}

export default DomainSelection;
