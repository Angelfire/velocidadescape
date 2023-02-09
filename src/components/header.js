import * as React from "react"
import { Link } from "gatsby"

const Header = ({ isRootPath, title }) => (
  <header className="flex items-center p-4 lg:px-8">
    <div>
      {isRootPath ? (
        <h1 className="text-3xl font-black md:text-5xl">
          <Link to="/">{title}</Link>
        </h1>
      ) : (
        <h2 className="text-3xl font-black md:text-5xl">
          <Link to="/">{title}</Link>
        </h2>
      )}
    </div>
  </header>
)

export default Header
