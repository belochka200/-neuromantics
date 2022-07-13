import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NotFound from "./components/pages/notfound/NotFound";
import Home from "./components/pages/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)

