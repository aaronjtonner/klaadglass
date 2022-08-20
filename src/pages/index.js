import React from "react"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import FullServices from "../components/fullServices"
import AllReviews from "../components/reviews"
import FormContact from "../components/forms/formContact"
import FeaturedGallery from "../components/featuredGallery"

export default function index() {
  return (
    <Layout>
      <Hero />
      <Bio />
      <Guarantee />
      <FullServices />
      <AllReviews />
      <FeaturedGallery />
      <FormContact title="Write us a message!" />
    </Layout>
  )
}
