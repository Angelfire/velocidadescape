import * as React from 'react'

const Footer = () => (
  <footer className="bg-gray-900 h-16 flex items-center">
    <div className="container flex flex-col md:justify-between mx-auto px-4 md:px-0 md:flex-row">
      <p className="font-text text-xs text-white">{`${new Date().getFullYear()} @Copyleft - All Wrongs Reserved`}</p>
      <p className="font-text text-xs text-white">Made with <span role="img" aria-label="heart">💛</span> and <span role="img" aria-label="beer">🍺</span> in Colombia</p>
    </div>
  </footer>
)

export default Footer
