import * as React from "react"

const Footer = () => (
  <footer className="flex h-16 items-center bg-gray-900">
    <div className="container mx-auto flex flex-col px-4 md:flex-row md:justify-between md:px-0">
      <p className="font-text text-xs text-white">{`${new Date().getFullYear()} @Copyleft - All Wrongs Reserved`}</p>
      <p className="font-text text-xs text-white">
        Made with{" "}
        <span role="img" aria-label="heart">
          💛
        </span>{" "}
        and{" "}
        <span role="img" aria-label="beer">
          🍺
        </span>{" "}
        in Colombia
      </p>
    </div>
  </footer>
)

export default Footer
