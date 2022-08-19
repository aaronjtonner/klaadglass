import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"

import BannerImg from "../../images/storm-door-installation-and-repair-services-calgary.svg"

export default function StormDoorsCalgary() {
  return (
    <Layout>
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/storm-doors-calgary"
        link3="storm doors calgary"
        title="Storm Door installation & repair services in Calgary"
        description="Calgary's best storm doors installation & repair services! KLAAD Glass Ltd. uses top-quality storm doors for your installation and repair needs!"
        img={BannerImg}
        alt="Storm Door installation & repair services in Calgary"
      />
    </Layout>
  )
}
