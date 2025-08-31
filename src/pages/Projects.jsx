import React from 'react'
import SpacesWeShaped from '../components/SpacesWeShaped'
import CommercialClients from '../components/CommercialClients'
import DesignIdeas from '../components/DesignIdeas'

export default function Projects() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-4">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <SpacesWeShaped />
      <CommercialClients />
      <DesignIdeas />
    </>
  )
}
