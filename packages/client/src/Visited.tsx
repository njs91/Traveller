import { Container, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import React from 'react'
import { ResultsTable } from './components/ResultsTable'
import { useGetCities } from './gql/queries'

export const Visited: FC = () => {
  const { result } = useGetCities({
    visited: true,
  })

  return (
    <>
      <Heading as="h1">Visited</Heading>
      <Container maxW="container.md">
        <ResultsTable citiesQueryResult={result} visitedPage={true} />
      </Container>
    </>
  )
}
