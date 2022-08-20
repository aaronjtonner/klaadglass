import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import AllReviews from "../components/reviews"
import CTA from "../components/CTA"

export default function About() {
  return (
    <Layout>
      <Banner
        to1="/"
        link1="Home"
        to2="/about"
        link2="About"
        title="about us"
      />
      <Bio />
      <Guarantee />
      <AllReviews />
      <CTA
        subtitle="need to request a service"
        description="KLAAD Glass can help you with all your residential or commercial glass and window service needs"
      />
      <FormContact title="get a free estimate for your glass installation or repair!" />
    </Layout>
  )
}
