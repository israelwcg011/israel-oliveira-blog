import React, { Children } from 'react'
import { Header } from './'

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}

export default Layout
