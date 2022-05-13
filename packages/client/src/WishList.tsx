import { Container, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import React from 'react'
import { ResultsTable } from './components/ResultsTable'
import { useGetCities } from './gql/queries'

export const WishList: FC = () => {
  const { result } = useGetCities({
    wishlist: true,
  })

  return (
    <>
      <Heading as="h1">Wish list</Heading>
      <Container maxW="container.md">
        <ResultsTable citiesQueryResult={result} wishlistPage={true} />
      </Container>
    </>
  )
}
