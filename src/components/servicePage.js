import React from "react"
import styled from "styled-components"
import { ButtonInline } from "./buttons"
import ServiceForm from "./forms/serviceForm"
import { Container, Section } from "./layoutComponents"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  @media screen and (max-width: 48em) {
    display: none;
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--clr-dark);
  border-radius: var(--br);
`

export default function ServicePage(props) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Aside className="spacing">
            <Navigation className="spacing">
              <h2 className="caps accent heading">glass services</h2>
              <ul>
                <li>
                  <ButtonInline to="/services/home-window-repair-calgary">
                    home window repair
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/commercial-window-repair-calgary">
                    commercial window repair
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/storm-doors-calgary">
                    storm doors
                  </ButtonInline>{" "}
                  <hr />
                </li>
              </ul>
            </Navigation>
            <ServiceForm />
          </Aside>
          <Content className="spacing">
            <div>
              <h1 className="title dark ">{props.title}</h1>
              <p className="caps dark bold">{props.subtitle}</p>
            </div>
            <div>
              <p>{props.mainContent}</p>
            </div>
            <Img>
              <img src={props.mainImg} alt={props.mainAlt} />
            </Img>
            <ServiceAreas>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae amet iure incidunt ullam quam molestias, minima
                voluptatum adipisci vel, mollitia iusto quo id! Perspiciatis,
                tempore! Harum iure commodi itaque nesciunt, veritatis
                dignissimos doloribus nisi? Voluptatum nulla magnam dolore enim
                molestias similique officia deleniti, illo amet error sit
                quaerat labore qui.
              </p>
            </ServiceAreas>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}
