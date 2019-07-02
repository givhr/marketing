import { Link } from "gatsby"
import React from "react"
import "./navbar.scss"
import styled from "styled-components"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', { offset: 100 })
}
const Header = () => (
  <HeaderWrapper className="navbar-container">
    <Link to="/#title">givhr logo</Link>
    <Link to="/#features">features</Link>
    <Link to="/#about-me">how it works</Link>
    <Link to="/#projects">use cases</Link>
    <Link to="/#contact-me">pricing</Link>
  </HeaderWrapper>
)

export default Header

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
  display: flex;
  background-color: ${({ theme, error }) =>
    error ? theme.primary14 : theme.primary13};
  text-align: center;
  h1 {
    color: ${({ theme, error }) => (error ? theme.primary14 : theme.primary13)};
    font-weight: bolder;
  }
  h3 {
    color: ${({ theme }) => theme.primary8};
    padding: 25px 0;
  }
`
