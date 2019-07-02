/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./src/styles/GlobalStyle"
import App from "./src/App"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <App>{element}</App>
    </React.Fragment>
  </ThemeProvider>
)
