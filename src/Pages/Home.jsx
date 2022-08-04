import React from 'react'
import Banner from '../components/Banner'
import Ads3 from '../components/Ads3'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote'
import Ads2 from '../components/Ads2'
import Friends from '../components/Friends'
import Ads1 from '../components/Ads1'
import Potensi from '../components/Potensi'
import Feature from '../components/Feature'
import Tentor from '../components/Tentor'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Banner />
    <InfoCard />
    <Potensi />
    <Ads1 />
    <Feature />
    <Ads2 />
    <Tentor />
    <Friends />
    <Ads3 />
    <Quote />
    <Footer />
    <Copyright />
    </div>
  )
}

export default Home