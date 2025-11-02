import React from 'react'
import Hero from './Hero'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import imgUrl from '../../assets/kite.png'
import img1Url from '../../assets/googlePlayBadge.svg'
import img2Url from '../../assets/appstoreBadge.svg'
import img3Url from '../../assets/console.png'
import img4Url from '../../assets/coin.png'
import img5Url from '../../assets/kiteconnect.png'
import img6Url from '../../assets/varsity.png'


function ProductPage() {
  return (
    <>
        <Hero/>
        <LeftSection imgUrl={imgUrl} name="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." link1Name="Try now" link2Name="Learn more" img1Url={img1Url} img2Url={img2Url}/>

        <RightSection imgUrl={img3Url} name="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkName="Learn more" img1Url={img1Url} img2Url={img2Url}/>

        <LeftSection imgUrl={img4Url} name="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." link1Name="coin" link2Name="Learn more" img1Url={img1Url} img2Url={img2Url}/>

         <RightSection imgUrl={img5Url} name="Kite connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linkName="Kite Connect" img1Url={img1Url} img2Url={img2Url}/>

        <LeftSection imgUrl={img6Url} name="Varsity Mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." link1Name="coin" link2Name="Learn more" img1Url={img1Url} img2Url={img2Url}/>
    </>
  )
}

export default ProductPage