import React from "react"
import styled from "styled-components"
import { Container } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import Breadcrumb2Links from "../breadcrumbs/breadcrumb2links"
import ClinicInfoGrid from "../clinicInfoGrid"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
`

const Bg = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  background: url("../../images/pacha-mamma-banner.jpg") rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1000;
`

const Top = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  color: var(--txt-light);
  padding: 4em 0;

  h2,
  p {
    max-width: 70ch;
  }

  p {
    color: var(--txt-light-secondary);
  }
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
`

// banner with only 2 links in the breadcrumb
export default function Banner(props) {
  return (
    <Wrapper>
      <Bg />
      <Top>
        <Container className="spacing">
          <div>
            <Breadcrumb2Links
              to1={props.to1}
              link1={props.link1}
              to2={props.to2}
              link2={props.link2}
            />
            <hr />
            <h2 className="title bold">{props.title}</h2>
          </div>
          <p className="body--small">{props.description}</p>
          <ButtonPrimary to="/book-an-appointment">
            book your massage
          </ButtonPrimary>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <ClinicInfoGrid />
        </Container>
      </Bottom>
    </Wrapper>
  )
}
