import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const placeholders = {
    userName: 'Enter your name',
    userAge: 'Enter your age',
    userEmail: 'Enter your email',
    userPassword: 'Enter your password'
  };

  return (
<div className='h-screen flex items-center justify-center'>
  <div className="container mx-auto p-4 max-w-lg">
    <h1 className="text-4xl font-bold text-center mb-8">CONTACT SECTION</h1>
    {Object.keys(formValues).map((key, index) => (
      <div className="input-wrapper mb-6 relative" key={index}>
        <input 
          type={key === 'userPassword' ? 'password' : key === 'userAge' ? 'number' : 'text'} 
          name={key} 
          value={formValues[key]} 
          onChange={handleChange} 
          placeholder={placeholders[key]} 
          className="input-field peer"
        />
        <label className="input-label capitalize">
          {placeholders[key]}
        </label>
      </div>
    ))}
    <button className="bg-teal-500 text-white py-2 px-4 rounded">Send Message</button>
  </div>
</div>

  );
};

export default Contact;
