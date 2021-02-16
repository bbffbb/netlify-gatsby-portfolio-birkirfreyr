import React from 'react'
import { Helmet } from 'react-helmet'
import FooterNav from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import '../assets/scss/material-kit-react.scss?v=1.9.0'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import HeaderLinks from "../components/Header/HeaderLinks.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const { ...rest } = children;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Header
        color="transparent"
        brand="My online portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
