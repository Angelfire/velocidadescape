import * as React from "react"
import Footer from "./Footer"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Header title={title} isRootPath={isRootPath} />
      <main className="mt-12 flex w-full flex-1 flex-col">{children}</main>
      {isRootPath && <Footer />}
    </div>
  )
}

export default Layout
