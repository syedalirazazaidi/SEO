import React from 'react'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'
const Header = () => {
  return (
    <Box>
      <Link href="">
        <Heading
          as="h3"
          bg="blue.100"
          py={4}
          size="xl"
          color="gray.400"
          textAlign="center"
        >
          My Blog
        </Heading>
      </Link>
    </Box>
  )
}

export default Header
