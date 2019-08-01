import { createGlobalStyle } from "styled-components"
import { themeColors } from "./colors"
import { CSSReset } from "./CSSReset"
import { font } from "./fonts"

export const GlobalStyles = createGlobalStyle`
  ${CSSReset};
  html, body {
    color: black;
    font-family: ${font};
    background-color: ${themeColors.primary1};
  }

  ::-webkit-scrollbar {
  width: 14px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  height: 6px;
  background-color: ${themeColors.scrollbarBg};
  background-clip: padding-box;
  border-radius: 7px;
  border: 4px solid ${themeColors.primary1};
}

  h1 {
    font-size: 32px;
    line-height: 36px;
    font-family: inherit;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
    font-family: inherit;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-family: inherit;
  }
  h4 {
    font-size: 16px;
    line-height: 20px;
    font-family: inherit;
  }
  h5 {
    font-size: 12px;
    line-height: 16px;
    font-family: inherit;
  }

  input, textarea {
    width: 90%;
    border: none;
    outline: none;
    font-size: 16px;
    padding-top: 5px;
    line-height: 20px;
    margin-bottom: 12px;
    font-family: inherit;
    letter-spacing: 0.25px;
    color: ${themeColors.primary8};
    caret-color: ${themeColors.primary13};

    &::placeholder {
      color: ${themeColors.primary8};
    }
  }

  input {
    &::placeholder {
      margin: 8px;
    }
  }

  textarea {
    resize: none;
    overflow: auto;

    &:focus {
      outline: none;
    }
  }
`
