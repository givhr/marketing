/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <PageWrapper>
        <Nav />
        <main>{children}</main>
        <Footer />
      </PageWrapper>
    )
  }
}

export { Layout }

export const PageWrapper = styled.body`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
