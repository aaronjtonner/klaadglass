import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "./buttons"
import { Container, Flex, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
`

const Text = styled.div`
  color: var(--txt-light);
`

export default function CTA(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <StaticImage
              src="../images/get-your-quote.svg"
              alt="call now to get your quote"
            />
            <Text className="spacing">
              <div>
                <p className="italics caps">{props.subtitle}</p>
                <h3 className="title bold">call to get your quote!</h3>
              </div>
              <p>{props.description}</p>
              <ButtonPrimary to="/contact">contact us</ButtonPrimary>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
