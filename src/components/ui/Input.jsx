import React from 'react';

export default function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className="input" 
    />
  );
}