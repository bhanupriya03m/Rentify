import React, { useState } from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userType: 'buyer',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      // Registration logic here
      console.log('Registering:', user);
    } else {
      // Login logic here
      console.log('Logging in with:', user);
    }
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} required />
              <input type="text" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} required />
              <select name="userType" value={user.userType} onChange={handleChange}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </>
          )}
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
          <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        </form>
        <button className="switch" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
