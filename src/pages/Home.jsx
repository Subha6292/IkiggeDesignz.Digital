import React from 'react'
import Hero from '../components/Hero'
import SpacesWeShaped from '../components/SpacesWeShaped'
import CallToAction from '../components/CallToAction'
import CommercialClients from '../components/CommercialClients'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Testimonials'
import MediaFeatures from '../components/MediaFeatures'
import OurFactory from '../components/OurFactory'
import FAQ from '../components/FAQ'
import Instagram from '../components/Instagram'
import DesignIdeas from '../components/DesignIdeas'

export default function Home() {
  return (
    <>
      <Hero />
      <SpacesWeShaped />
      <CallToAction />
      <CommercialClients />
      <HowWeWork />
      <Testimonials />
      <MediaFeatures />
      <OurFactory />
      <FAQ />
      <Instagram />
      <DesignIdeas />
    </>
  )
}
