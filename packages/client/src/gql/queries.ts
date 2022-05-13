import { gql, QueryResult, useQuery } from '@apollo/client'
import { CITIES_PER_PAGE } from '../Home'

export const GET_CITIES = gql`
  query getCities($limit: Int, $filter: CitiesFilters) {
    cities(limit: $limit, filter: $filter) {
      total
      cities {
        country
        id
        name
        visited
        wishlist
      }
    }
  }
`

type FilterArgs = {
  wishlist?: boolean
  visited?: boolean
}

type UseGetCitiesOutput = {
  result: QueryResult<any, { limit: number; filter: FilterArgs }>
}

export const useGetCities = (filterArgs: FilterArgs): UseGetCitiesOutput => {
  const result = useQuery(GET_CITIES, {
    variables: {
      limit: CITIES_PER_PAGE,
      filter: filterArgs,
    },
  })

  return { result }
}
