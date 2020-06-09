import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <div className="p-4">
      <h1>
        <Link to="/">
          <span className="border-solid border-2 border-black font-extrabold h-16 inline-flex items-center justify-center mr-4 rounded-full text-center w-16">VE</span>
          { siteTitle }
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
