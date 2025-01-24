// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer
      className="text-center p-3"
      style={{
        backgroundColor: '#343a40', // dark gray
        color: '#fff',
        marginTop: 'auto',
      }}
    >
      <p style={{ margin: 0 }}>
        Copyright &copy; 2025. This to-do-list website was created by Abdullah Mehtab and Umm-e-Abiha.
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
