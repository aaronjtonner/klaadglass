import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import {
  AnchorInline,
  ButtonInline,
  ButtonUnderline,
  ButtonPrimary,
} from "../../components/buttons"
import CTA from "../../components/CTA"
import Layout from "../../components/layout"
import {
  GridThree,
  Section,
  Container,
  Flex,
  FlexMobileOpp,
} from "../../components/layoutComponents"
import AllReviews from "../../components/reviews"
import ServicePage from "../../components/servicePage"
import FormContact from "../../components/forms/formContact"

import BannerImg from "../../images/best-home-window-repair-services-calgary.svg"
import MainImg from "../../images/home-window-repair-calgary.jpg"
import styled from "styled-components"
import ResidentialFAQ from "../../components/faqs/residentialFAQ"

const ContentWrapper = styled.div`
  h2,
  p {
    max-width: 70ch;
    width: 100%;
  }
`

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
        mainContent="Home window repair and replacement is a common need in Calgary. There are many reasons why windows may become damaged and need to be replaced. The most common cause of window damage in Calgary is severe weather or damage caused by others. High winds can break glass, and hail can crack or chip it. Hail is especially prominent in Calgary during the summer months which is why it’s important to have a go-to home window repair Calgary company that can also help with window hail damage repair. Extreme cold can also cause glass to become brittle and break. In addition, tree limbs or other debris can fall on windows and cause them to break. If you have damage to your windows, it is important to contact your reputable window repair contractor as soon as possible. At KLAAD Glass, we will be able to assess the damage and recommend the best course of action. In some cases, the damage may be minor and home window replacement Calgary is all that is needed. However, if the damage is extensive, we will likely recommend that the window be replaced. Regardless of the extent of the damage, it is important to have it addressed as soon as possible to avoid further damage to your home."
        mainImg={MainImg}
        mainAlt="home window repair calgary"
      />

      <Section>
        <Container>
          <div className="center spacing">
            <h3 className="italics title bold caps">
              request a service on your home window
            </h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 403-891-3172">403-891-3172</AnchorInline>{" "}
              or fill out our contact form to reuest a service or free estimate
              for us!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </div>
        </Container>
      </Section>
      <AllReviews />
      <Section>
        <ContentWrapper>
          <Container className="spacing-lg">
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">
                  Calgary’s Experts in large home window repairs
                </h2>
                <p>
                  At KLAAD Glass, we specialize in large home window repairs,
                  mansion window repairs, and highrise window repairs. No job is
                  too big or too small for our team of experienced
                  professionals. We understand the unique challenges that come
                  with working on large windows, and we have the skills and
                  expertise to get the job done right. We also offer a wide
                  range of custom glass Calgary options to suit your specific
                  needs and large window sizes. Whether you need quality window
                  installation Calgary services, or general window repairs to
                  your existing windows, we can help. Contact us today to
                  schedule a consultation.
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/residential/large-home-window-installation-calgary.jpg"
                alt="large home window installation calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/residential/residential-window-replacement-cost-calgary.jpg"
                alt="residential window replacement cost calgary"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">Window replacement costs</h2>
                <p>
                  Residential window replacement cost Calgary can vary depending
                  on a number of factors, such as the size and style of the
                  window, the type of glass, and the frame material. In general,
                  the average cost of a new window is between $250 and $700 per
                  window. When considering the cost of window replacement, it's
                  also important to factor in the installation costs. At KLAAD
                  Glass we will include window installation cost in our quote so
                  you will know the full price upfront without any hidden
                  charges. Overall, the cost of residential window replacement
                  can range from a few hundred dollars to several thousand,
                  depending on the scope of the project. We can help you find a
                  quality window at a price that fits your budget.
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">
                  Have moisture and fog in your windows?
                </h2>
                <p>
                  We can help with that! If you have ever noticed moisture or
                  fog in your home windows, you are not alone. This is a common
                  problem, especially in older homes or in the colder climates
                  we experience in Calgary. The good news is that there are a
                  few things you might be able to do to fix the problem before
                  hiring a glass repair company. First, check the window seals
                  and weather stripping. If there are any gaps or cracks,
                  sealing them up will help to keep moisture out. You can also
                  try opening a window slightly to allow some air circulation.
                  If the problem persists, you may need to replace your window
                  glass. KLAAD Glass offers professional window defogging
                  Calgary and we can help you to determine the best course of
                  action. With our help, you can enjoy clear, fog-free windows
                  in no time!
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/residential/window-defogging-calgary.jpg"
                alt="window defogging calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/residential/calgary-triple-pane-window-upgrades.jpg"
                alt="calgary triple pane window upgrades"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">
                  Triple pane window upgrades
                </h2>
                <p>
                  Are you interested in achieving greater energy efficiency in
                  your Calgary home? You might want to consider calgary triple
                  pane window upgrades and installation. Triple pane windows are
                  a type of window that has three layers of glass, with an
                  insulating space between each layer. This design helps to
                  prevent heat loss in the winter and keep your home cooler in
                  the summer. As a result, triple pane windows can help you save
                  money on your energy bills. In addition, they can also help to
                  reduce noise pollution and improve the overall comfort of your
                  home. KLAAD Glass offers triple pane window upgrades and
                  installation services and we offer competitive rates and
                  quality workmanship.
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">Window rot repair</h2>
                <p>
                  Window rotting is a serious problem that should be addressed
                  as soon as possible. Window rot can cause structural damage to
                  your home, and it can also lead to health problems for you and
                  your family. We offer window rot repair Calgary to help you
                  get rid of window rot quickly and efficiently. We use a
                  variety of techniques to remove window rot, including chemical
                  treatments, sanding, and possibly replacement of windows. We
                  can also help you prevent window rot in the future by sealing
                  and caulking your windows. Contact us today to learn more!
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/residential/window-rot-repair-calgary.jpg"
                alt="window rot repair calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/residential/skylight-repair-calgary.jpg"
                alt="skylight repair calgary"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">
                  Skylight installations & repairs
                </h2>
                <p>
                  Skylights are a great way to let natural light into your home
                  and can help reduce your energy costs. However, skylights can
                  also be a source of leaks and drafts. If you notice any
                  leaking or drafts around your skylight, it's important to have
                  it repaired as soon as possible. Skylight repair calgary can
                  be tricky, so it's best to leave it to the professionals. At
                  KLAAD Glass we will be able to quickly identify the source of
                  the problem and make the necessary repairs. In most cases,
                  skylight repair calgary is relatively straightforward and can
                  be completed in a few hours. However, more complex repairs may
                  require a more extensive investigation. Either way, skylight
                  repairs in Calgary is a job best left to the experts - contact
                  us today to get your skylight installation or repair quote!
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">
                  Door installations and repairs
                </h2>
                <p>
                  We offer windows and doors Calgary services, and we specialize
                  in all types of door repairs, from patio door supply and
                  installation to screen door replacement and bug screen
                  replacement. We also specialize in storm door repairs and
                  installations. No matter what type of door you need, we can
                  help. We also offer a wide range of windows and doors, so you
                  can find the perfect fit for your home. And if you're not sure
                  what you need, our friendly and knowledgeable staff are always
                  happy to help. So why wait? Contact us today and let us help
                  you find the perfect windows and doors for your home.
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/residential/windows-and-doors-calgary.jpg"
                alt="windows and doors calgary"
                className="stretch"
              />
            </Flex>
          </Container>
        </ContentWrapper>
      </Section>
      <ResidentialFAQ />
      <CTA
        subtitle="need a new home window?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
      />
      {/* <Section>
        <Container>
          <h2 className="caps title bold accent">
            3 easy steps to a new window for your home
          </h2>
          <GridThree>
            <div className="spacing">
              <StaticImage
                src="../../images/window-installation-step-1.svg"
                alt="calgary window installation step 2"
              />
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
              <StaticImage
                src="../../images/window-installation-step-2.svg"
                alt="calgary window installation step 1"
              />
              <h3 className="caps bold">we take care of business</h3>
              <p>
                We have an elite crew to handle any job big or small, within
                budget, and on time.
              </p>
            </div>
            <div className="spacing">
              <StaticImage
                src="../../images/window-installation-step-3.svg"
                alt="calgary window installation step 3"
              />
              <h3 className="caps bold">Enjoy Your New Home Window</h3>
              <p>
                We go above and beyond to handle any request so you can enjoy
                your upgraded windows in no time!
              </p>
            </div>
          </GridThree>
        </Container>
      </Section> */}
      <FormContact title="get free estimate on your home window repair" />
    </Layout>
  )
}
