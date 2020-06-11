import PropTypes from "prop-types";
import React from "react";
import CustomFonts from '../components/CustomFonts';
import Header from "./header";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
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
    <div className="bg-primary h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <CustomFonts />
      <main className="container mx-auto">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
