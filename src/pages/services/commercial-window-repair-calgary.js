import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import ServicePage from "../../components/servicePage"
import CTA from "../../components/CTA"

import BannerImg from "../../images/24-hour-emergency-commercial-window-repair-calgary.svg"
import MainImg from "../../images/commercial-window-repair-calgary.jpg"

export default function CommercialWindowRepair() {
  return (
    <Layout>
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/commercial-window-repair-calgary"
        link3="commercial window repair calgary"
        title="24/7 emergency Commercial Window Repair services in Calgary"
        description="KLAAD Glass Ltd. offers 24/7 emergency window & glass repairs for commercial buildings in Calgary. Call us day or night for a repair quote!"
        img={BannerImg}
        alt="24/7 emergency Commercial Window Repair services in Calgary"
      />
      <ServicePage
        title="commercial window repair calgary"
        subtitle="24/7 emergency glass repair services on storefronts, offices, & buildings"
        mainContent="main keyword content"
        mainImg={MainImg}
        mainAlt="commercial window repair calgary"
      />
      <CTA
        subtitle="need a new window for your building or office?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
      />
    </Layout>
  )
}
