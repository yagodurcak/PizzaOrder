import Footer from './Footer'
import Navbar from './Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
      <div>
          <Navbar/>
            {children}
          <Footer/>
      </div>
  )
}

export default Layout