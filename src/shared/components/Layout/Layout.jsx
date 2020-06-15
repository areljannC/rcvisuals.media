import React from 'react'
import { Box } from '@theme-ui/components'
import { Header } from './components'

const Layout = ({ children }) => (
  <Box
    as='div'
    sx={{
      width: '100vw'
    }}
  >
    <Header />
    {children}
  </Box>
)

export default Layout