import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <H1>Hi, See how the "theme" is coming through in the styled component</H1>
  )
}

export default IndexPage
// const IndexPage = () => <Layout>{/* <SEO title="Givhr" /> */}</Layout>

// export default IndexPage

const H1 = styled.h1`
  color: ${({ theme }) => theme.primary12};
`
