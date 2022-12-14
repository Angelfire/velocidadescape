import * as React from "react"

const Footer = () => (
  <footer className="bg-gray-900 pt-8 pb-16">
    <div className="container flex justify-between mx-auto">
      <p className="font-text text-xs text-white">{new Date().getFullYear()} @Copyleft - All Wrongs Reserved</p>
      <p className="font-text text-xs text-white">Made with <span role="img" aria-label="heart">💛</span> in Colombia</p>
    </div>
  </footer>
)

export default Footer