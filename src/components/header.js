import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ location, siteTitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header className="flex items-center p-4 lg:px-8 justify-between">
      <div>
        { location.pathname === rootPath
          ? <h1>
              <Link to="/">
                <span className="border-solid border-2 border-black font-extrabold h-16 inline-flex items-center justify-center mr-4 rounded-full text-center w-16">VE</span>
                { siteTitle }
              </Link>
            </h1> 
          : <h2>
              <Link to="/">
                <span className="border-solid border-2 border-black font-extrabold h-16 inline-flex items-center justify-center mr-4 rounded-full text-center w-16">VE</span>
                { siteTitle }
              </Link>
            </h2>
        }
      </div>
      <a
        className="bg-blue px-4 py-1 rounded-full text-white"
        href="https://gecken.co/"
        rel="noopener noreferrer"
        target="_blank"
      >
        About me
      </a>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  location: {},
}

export default Header
