import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)' }}>
      <p style={{ margin: 0 }}>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  );
};

export default Footer;
