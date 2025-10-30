import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainHome from './landing/Home/MainHome.jsx'
import AboutPage from './landing/About/AboutPage.jsx'
import PricingPage from './landing/Pricing/PricingPage.jsx'
import ProductPage from './landing/Products/ProductPage.jsx'
import SupportPage from './landing/Support/SupportPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductPage/>
    {/* <MainHome /> */}
    {/* <AboutPage/> */}
    {/* <PricingPage/> */}
    {/* <SupportPage/> */}
  </StrictMode>,
)
