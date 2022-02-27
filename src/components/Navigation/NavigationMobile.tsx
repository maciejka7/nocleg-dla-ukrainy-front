import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, useDisclosure, Flex } from '@chakra-ui/react'
import React from 'react'
import LoginButton from './LoginButton'
import NavigationItem from './NavigationItem'
import { routes } from './routes'

type Props = {}

const iconSize = 10;

const NavigationMobile = (props: Props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>()

  return (
    <>
    <Button colorScheme='blue' variant='ghost' ref={btnRef.current as any} onClick={onOpen}>
      <HamburgerIcon w={iconSize} h={iconSize} />
    </Button>
    <Drawer
      size='xs'
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef.current as any}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Flex direction='column' align='center' justify='center'>
        {routes.map((route) => (
          <NavigationItem
            onClick={onClose}
            isMobile
            key={route.linkTo}
            linkLabel={route.linkLabel}
            linkTo={route.linkTo}
          />
        ))}
        </Flex>
        </DrawerBody>

        <DrawerFooter>
          <LoginButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default NavigationMobile



export const getStaticProps = async () => {
  return {
    props: {}
  }
}