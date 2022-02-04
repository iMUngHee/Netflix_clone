import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme/theme";
import "./theme/fonts.css";
import { QueryClient, QueryClientProvider } from "react-query";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: 'Netflix_Sans', 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.2;
    background-color: black;
    color: white;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
`;

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
