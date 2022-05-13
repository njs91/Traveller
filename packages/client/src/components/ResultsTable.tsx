import { Box, Checkbox, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useHandleChangeVisited, useHandleChangeWishList } from '../gql/mutations'
import { City as CityType } from '../../../api/src/cities/types'
import { LoadingSpinner, Error } from './Info'

interface ResultsTableProps {
  citiesQueryResult: any
  visitedPage?: boolean
  wishlistPage?: boolean
}

export const ResultsTable: FC<ResultsTableProps> = ({
  citiesQueryResult: { data, loading, error },
  visitedPage,
  wishlistPage,
}) => {
  const { changeVisitedInfo, loadingVisited, changeVisitedError } = useHandleChangeVisited()
  const { changeWishListInfo, loadingWishList, changeWishListError } = useHandleChangeWishList()

  if (loading) return <LoadingSpinner />
  if (error) return <Error msg="Could not fetch cities!" />
  if (!data) return <></>

  const cityData = data.cities

  if (!cityData.cities.length) return <Box mt={4}>No cities found</Box>

  return (
    <>
      <Box h={10} mt={4}>
        {(loadingVisited || loadingWishList) && <LoadingSpinner />}
        {(changeVisitedError || changeWishListError) && <Error />}
      </Box>
      <TableContainer mt={4}>
        <Table variant="simple">
          <TableCaption>Total cities: {cityData?.total}</TableCaption>
          <Thead>
            <Tr>
              <Th>City</Th>
              <Th>Country</Th>
              {!visitedPage && <Th>Visited</Th>}
              {!wishlistPage && <Th>Wishlist</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {cityData?.cities.map(({ id, name, country, visited, wishlist }: CityType) => (
              <Tr key={id}>
                <Td>{name}</Td>
                <Td>{country}</Td>
                {!visitedPage && (
                  <Td>
                    {visited ? 'True' : 'False'}{' '}
                    <Checkbox
                      defaultChecked={visited}
                      onChange={() => changeVisitedInfo(id, visited)}
                      aria-label="Change visited"
                    />
                  </Td>
                )}
                {!wishlistPage && (
                  <Td>
                    {wishlist ? 'True' : 'False'}{' '}
                    <Checkbox
                      defaultChecked={wishlist}
                      onChange={() => changeWishListInfo(id, wishlist)}
                      aria-label="Change wishlist"
                    />
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
