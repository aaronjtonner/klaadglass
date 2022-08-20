import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  AnchorInline,
  ButtonInline,
  ButtonPrimary,
  ButtonUnderline,
} from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

const Item = styled.div`
  text-align: center;
`

export default function FullServices() {
  return (
    <Section>
      <Container className="spacing">
        <div className="spacing center">
          <h2 className="title italics caps bold">services we provide</h2>
          <p>
            We have extensive experience in{" "}
            <ButtonInline to="/services/home-window-repair-calgary">
              residential
            </ButtonInline>{" "}
            and{" "}
            <ButtonInline to="/services/commercial-window-repair-calgary">
              commercial glass replacement
            </ButtonInline>
            , repair, and installation. We are your trusted window contractor in
            Calgary!
          </p>
        </div>
        <div className="spacing-lg">
          <GridThree>
            <Item className="spacing">
              <StaticImage
                src="../images/home-window-repair-installation-calgary.jpg"
                alt="home window repair & installation calgary"
              />
              <h3 className="caps bold">home window repair & installation</h3>
              <p>
                KLAAD Glass Ltd. does the big residential window repair jobs no
                one else wants to do! Large home windows & highrise window
                repair.
              </p>
              <ButtonUnderline
                className="button"
                to="/services/home-window-repair-calgary"
              >
                home window repairs &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                src="../images/24-hour-commercial-window-repair-calgary.jpg"
                alt="24/7 commercial window repair calgary"
              />
              <h3 className="caps bold">24/7 commercial window repair</h3>
              <p>
                KLAAD Glass Ltd. does the big residential window repair jobs no
                one else wants to do! Large home windows & highrise window
                repair.
              </p>
              <ButtonUnderline
                className="button"
                to="/services/commercial-window-repair-calgary"
              >
                commercial window repairs &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                src="../images/new-storm-doors-installation-calgary.jpg"
                alt="new storm doors installation calgary"
              />
              <h3 className="caps bold">new storm door installations</h3>
              <p>
                KLAAD Glass Ltd. does the big residential window repair jobs no
                one else wants to do! Large home windows & highrise window
                repair.
              </p>
              <ButtonUnderline
                className="button"
                to="/services/storm-doors-calgary"
              >
                new storm doors &#x2192;
              </ButtonUnderline>
            </Item>
          </GridThree>
          <div className="center spacing">
            <h3 className="italics caps">request a service</h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 403-891-3172">403-891-3172</AnchorInline>{" "}
              or fill out our contact form to reuest a service or free estimate
              for us!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </div>
        </div>
      </Container>
    </Section>
  )
}
