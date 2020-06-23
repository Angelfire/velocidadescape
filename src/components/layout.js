import PropTypes from "prop-types";
import React from "react";
import CustomFonts from '../components/CustomFonts';
import Header from "./header";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        location={ location }
        siteTitle={ data.site.siteMetadata.title }
      />
      <CustomFonts />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

Layout.defaulProps = {
  location: {},
};

export default Layout
