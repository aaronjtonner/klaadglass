import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import { AnchorInline, ButtonInline } from "../../components/buttons"
import CTA from "../../components/CTA"
import Layout from "../../components/layout"
import {
  GridThree,
  Section,
  Container,
} from "../../components/layoutComponents"
import AllReviews from "../../components/reviews"
import ServicePage from "../../components/servicePage"

import BannerImg from "../../images/best-home-window-repair-services-calgary.svg"
import MainImg from "../../images/home-window-repair-calgary.jpg"
export default function HomeWindowRepair() {
  return (
    <Layout>
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/home-window-repair-calgary"
        link3="home window repair calgary"
        title="best home window repair services in calgary - we fix large windows!"
        description="KLAAD Glass Ltd. does the big residential window repair jobs no one else wants to do! Large home & highrise window repair Calgary!"
        img={BannerImg}
        alt="best home window repair services in calgary"
      />
      <ServicePage
        title="home window repair calgary"
        subtitle="calgary's trusted window repair and replacement company"
        mainContent="main keyword content"
        mainImg={MainImg}
        mainAlt="home window repair calgary"
      />
      <CTA
        subtitle="need a new home window?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
      />
      <Section>
        <Container>
          <h2 className="caps title bold accent">
            3 easy steps to a new window for your home
          </h2>
          <GridThree>
            <div className="spacing">
              <StaticImage src="" alt="" />
              <h3 className="caps bold">schedule your appointment</h3>
              <p>
                Schedule an appointment by calling us at{" "}
                <AnchorInline href="tel: 403-891-3172">
                  403-891-3172
                </AnchorInline>{" "}
                or using our{" "}
                <ButtonInline to="/contact">
                  online appointment form.
                </ButtonInline>
              </p>
            </div>
            <div className="spacing">
              <StaticImage src="" alt="" />
              <h3 className="caps bold">we take care of business</h3>
              <p>
                We have an elite crew to handle any job big or small, within
                budget, and on time.
              </p>
            </div>
            <div className="spacing">
              <StaticImage src="" alt="" />
              <h3 className="caps bold">Enjoy Your New Home Window</h3>
              <p>
                We go above and beyond to handle any request so you can enjoy
                your upgraded windows in no time!
              </p>
            </div>
          </GridThree>
        </Container>
      </Section>
      <AllReviews />
    </Layout>
  )
}
