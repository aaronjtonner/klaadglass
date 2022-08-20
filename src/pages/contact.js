import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"

export default function Contact() {
  return (
    <Layout>
      <Banner
        to1="/"
        link1="Home"
        to2="/contact"
        link2="Contact"
        title="have a question? need to request a service or get a quote?"
      />
      <FormContact title="get in touch with us using the form below" />
    </Layout>
  )
}
