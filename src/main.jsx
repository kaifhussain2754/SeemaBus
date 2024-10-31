import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecoilRoot } from 'recoil'; // Import RecoilRoot
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot> {/* Wrap App with RecoilRoot */}
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
);
