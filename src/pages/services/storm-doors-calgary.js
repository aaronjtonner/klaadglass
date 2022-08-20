import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import ServicePage from "../../components/servicePage"
import CTA from "../../components/CTA"

import BannerImg from "../../images/storm-door-installation-and-repair-services-calgary.svg"
import MainImg from "../../images/home-window-repair-calgary.jpg"

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
      <ServicePage
        title="new storm doors calgary"
        subtitle="we supply and install new storm doors, and we provide storm door maintenance & repair services"
        mainContent="main keyword content"
        mainImg={MainImg}
        mainAlt="storm doors calgary"
      />
      <CTA
        subtitle="need a storm door installed or repaired?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
      />
    </Layout>
  )
}
