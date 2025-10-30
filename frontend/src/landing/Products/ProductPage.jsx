import React from 'react'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import Universe from './Universe'
import Navbar from '../Navbar'
import Footer from '../Footer'

function ProductPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <RightSection/>
        <LeftSection/>
        <Universe/>
        <Footer/>
    </>
  )
}

export default ProductPage