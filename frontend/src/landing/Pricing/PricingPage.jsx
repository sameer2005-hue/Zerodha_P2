import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Hero from './Hero.jsx'
import Price from './Price.jsx'
import Equity from './Equity.jsx'
import Tables from './tables.jsx'
import Charges from './Charges.jsx'

function PricingPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Price/>
        <Equity/>
        <Tables/>
        <Charges/>
        <Footer/>

    </>
  )
}

export default PricingPage