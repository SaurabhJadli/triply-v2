import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Plan from './pages/Plain.jsx'
import CurrencyConverter from './pages/CurrencyConverter.jsx'
import CountryInfo from './pages/CountryInfo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/home" element={<App />} />
  <Route path="/plan" element={<Plan />} />
  <Route path="/category" element={<App />} />
  <Route path="/currency" element={<CurrencyConverter />} />
  <Route path="/countryInfo" element={<CountryInfo />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/searchResult" element={<App />} />
  <Route path="/logout" element={<App />} />
  <Route path="/login" element={<App />} />
  <Route path="/register" element={<App />} />
  <Route path="/forgotpassword" element={<App />} />
</Routes>
</BrowserRouter>  
</StrictMode>,
)
