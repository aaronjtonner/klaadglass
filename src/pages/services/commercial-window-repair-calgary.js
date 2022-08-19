import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"

import BannerImg from "../../images/24-hour-emergency-commercial-window-repair-calgary.svg"

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
    </Layout>
  )
}
