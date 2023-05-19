import { Button, Flex, HStack, Heading, Link, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaTwitter } from 'react-icons/fa'

export const Preview = () => {
  return (
    <Flex
      flexDir={'column'}
      w={'full'}
      maxW={'1440px'}
      margin={'0 auto'}
      h={'full'}
      minH={'100vh'}
      overflow={'hidden'}
      justifyContent={'space-between'}
      p={'30px 20px'}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'} pointerEvents={'none'}>
        <Heading>MentorDAO</Heading>
        <HStack spacing={4} display={{ sm: 'none', md: 'flex' }}>
          <Button>For Experts</Button>
          <Button>For Mentee</Button>
          <Button>For Nonprofits</Button>
        </HStack>
        <Flex display={{ sm: 'none', md: 'flex' }} alignItems={'center'} gap={4}>
          <Text color={'blue'} fontStyle={'italic'}>
            Beta v1 soon
          </Text>
          <Flex opacity={0.42}>
            <ConnectButton />
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir={{ sm: 'column', md: 'row' }} flexWrap={'wrap'} w='full'>
        <Flex flexBasis={{ sm: '100%', md: '100%' }} flexGrow={0}>
          <Heading size={'lg'}>
            Personal mentoring sessions with web3 experts{' '}
            <Text color={'black'}>for a donation to nonprofits & public goods</Text>
          </Heading>
        </Flex>
      </Flex>

      <Flex>
        <Link isExternal href='https://twitter.com/MentorDAOist'>
          <FaTwitter fontSize={33} />
        </Link>
      </Flex>
    </Flex>
  )
}
