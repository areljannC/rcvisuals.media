import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Box, Text, Button, Link } from '@theme-ui/components'

const Header = () => (
  <Flex
    as='header'
    sx={{
      width: '100%',
      height: 64,
      paddingX: 6,
      paddingY: 2,
      justifyContent: 'space-between',
      backgroundColor: 'background',
    }}
  >
    <Text
      as='span'
      sx={{
        fontSize: 5,
        fontWeight: 'bold',
        color: 'primary',
      }}
    >
      RC
      <Text
        as='span'
        sx={{
          fontSize: 5,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: 'text',
        }}
      >
        Visuals
      </Text>
    </Text>
    <Flex as='nav' sx={{ width: 'fit-content', height: '100%' }}>
      <Flex
        as='ul'
        sx={{
          margin: 'auto',
          padding: 0,
          alignItems: 'center',
          listStyleType: 'none',
        }}
      >
        <Box as='li' sx={{ marginLeft: 3 }}>
          <Link
            as={GatsbyLink}
            sx={{
              textTransform: 'uppercase',
              color: 'text',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            to='/'
          >
            Home
          </Link>
        </Box>
        <Box as='li' sx={{ marginLeft: 3 }}>
          <Link
            as={GatsbyLink}
            sx={{
              textTransform: 'uppercase',
              color: 'text',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            to='/gallery'
          >
            Gallery
          </Link>
        </Box>
        <Box as='li' sx={{ marginLeft: 3 }}>
          <Link
            as={GatsbyLink}
            sx={{
              textTransform: 'uppercase',
              color: 'text',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            to='/about'
          >
            About
          </Link>
        </Box>
        <Box as='li' sx={{ marginLeft: 3 }}>
          <Button sx={{ padding: 2, borderRadius: 4 }}>
            <Link
              as={GatsbyLink}
              sx={{
                textTransform: 'uppercase',
                color: 'background',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
              to='/contact'
            >
              Contact
            </Link>
          </Button>
        </Box>
      </Flex>
    </Flex>
  </Flex>
)

export default Header
