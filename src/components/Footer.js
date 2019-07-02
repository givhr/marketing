import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrapper>
    <h3>Givhr {new Date().getFullYear()} © All Rights Reserved</h3>
    <div>
      <Link to="/#features">Features</Link>
      <Link to="/#how-it-works">How it works</Link>
      <Link to="/#use-cases">Use cases</Link>
      <Link to="/#contact">Contact</Link>
    </div>
  </FooterWrapper>
)

export default Footer

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, error }) =>
    error ? theme.primary14 : theme.primary13};
  text-align: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  a {
    color: ${({ theme }) => theme.primary1};
    padding: 25px 0;
  }
  h3 {
    color: ${({ theme }) => theme.primary1};
    padding: 25px 0;
  }
`
