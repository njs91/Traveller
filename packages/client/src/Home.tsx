import { useLazyQuery } from '@apollo/client'
import { Container, Heading, VStack } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { ResultsTable } from './components/ResultsTable'
import { Search } from './components/Search'
import { GET_CITIES } from './gql/queries'
import { useDebounce } from './hooks/useDebounce'

export const CITIES_PER_PAGE = 10

export const Home: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [getLazyCities, citiesQueryResult] = useLazyQuery(GET_CITIES)

  const handleSearch = () => {
    getLazyCities({
      variables: {
        limit: CITIES_PER_PAGE,
        filter: {
          name: search,
        },
      },
    })
  }

  const debouncedSearch = useDebounce(handleSearch, 500)

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <Search setSearch={setSearch} handleSearch={debouncedSearch} />
        <ResultsTable citiesQueryResult={citiesQueryResult} />
      </Container>
    </VStack>
  )
}
