import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import FullServices from "../components/fullServices"

export default function Services() {
  return (
    <Layout>
      <Banner
        to1="/"
        link1="Home"
        to2="/services"
        link2="Services"
        title="Glass Services"
      />
      <FullServices />
      <FormContact title="get in touch with us using the form below" />
    </Layout>
  )
}
