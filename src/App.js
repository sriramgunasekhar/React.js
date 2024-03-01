import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './Display';
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';

const App = () => {
  const [name, setName] = useState('Guna Sekhar');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <div>
        <Display />
        <h1>{name}</h1>
        <button onClick={() => setName('Sriram Guna Sekhar')}>change to full name</button>
      </div>
    </BrowserRouter>
  );
};

export default App;

