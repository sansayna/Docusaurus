import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function CustomNavbar(props) {
  return (
    <Navbar {...props}>
      <span style={{ color: '#ff6347', fontWeight: 'bold' }}>My Custom Navbar</span>
    </Navbar>
  );
}