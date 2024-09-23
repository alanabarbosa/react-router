import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Contact from '../src/components/Contact.jsx';
import Produtos from '../src/components/Produtos.jsx';
import Produto from '../src/components/Produto.jsx';
import NotFound from '../src/components/NotFound.jsx';
import Footer from '../src/components/Footer.jsx';
import '../public/style.css';

const App = () => {
  return (
    <>
        <div>
        <BrowserRouter>
          <Header />
            <div className="container">
              <Routes>
                <Route path='/' element={<Produtos />} />
                <Route path='/produtos/:id' element={<Produto />} />
                <Route path='/contato' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>          
        </div>
    </>
  );
};

export default App;
