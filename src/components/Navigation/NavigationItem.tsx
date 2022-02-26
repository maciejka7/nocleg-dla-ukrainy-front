import { Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { NavigationItem } from './types'

interface Props extends NavigationItem {}

const NavigationItem = (props: Props) => {

  const { isMobile, linkLabel, linkTo, ...rest } = props

  const mobileSize = isMobile ? '100%' : 'auto';

  return (
    <Link passHref href={linkTo}>
    <Button {...rest} width={mobileSize}  colorScheme='blue' variant='ghost'>
      <Text fontSize="large" as="a">{linkLabel}</Text>
      </Button>
    </Link>
  )
}

export default NavigationItem