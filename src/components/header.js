import * as React from 'react'
import { Link } from 'gatsby'

const Header = ({ isRootPath, title }) => (
  <header className="flex items-center p-4 lg:px-8 justify-between">
    <div>
      {isRootPath
        ? <h1>
          <Link to="/">
            <span className="border-solid border-2 border-black font-extrabold h-16 inline-flex items-center justify-center mr-4 rounded-full text-center w-16">VE</span>
            {title}
          </Link>
        </h1>
        : <h2>
          <Link to="/">
            <span className="border-solid border-2 border-black font-extrabold h-16 inline-flex items-center justify-center mr-4 rounded-full text-center w-16">VE</span>
            {title}
          </Link>
        </h2>
      }
    </div>
    <a
      className="bg-blue px-4 py-1 rounded-full text-white"
      href="https://srhart.co/"
      rel="noopener noreferrer"
      target="_blank"
    >
      About me
    </a>
  </header>
)

export default Header
