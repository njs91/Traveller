import { ApolloError, gql, useMutation } from '@apollo/client'

export const CHANGE_WISH_LIST = gql`
  mutation changeWishlist($input: CitiesMutationInput) {
    updateCity(input: $input) {
      wishlist
      id
    }
  }
`

export const CHANGE_VISITED = gql`
  mutation changeVisited($input: CitiesMutationInput) {
    updateCity(input: $input) {
      visited
      id
    }
  }
`

type UseHandleChangeWishListOutput = {
  changeWishListInfo: (id: number, wishlist: boolean) => void
  loadingWishList: boolean
  changeWishListError: ApolloError | undefined
}

export const useHandleChangeWishList = (): UseHandleChangeWishListOutput => {
  const [changeWishList, { loading, error }] = useMutation(CHANGE_WISH_LIST)

  const changeWishListInfo = (id: number, wishlist: boolean) => {
    // async/await not needed
    changeWishList({
      variables: {
        input: {
          id,
          wishlist: !wishlist,
        },
      },
      // @todo update cache via cache.modify
      // refetchQueries: [{ query: GET_CITIES }]
    })
  }

  return { changeWishListInfo, loadingWishList: loading, changeWishListError: error }
}

type UseHandleChangeVisitedOutput = {
  changeVisitedInfo: (id: number, visited: boolean) => void
  loadingVisited: boolean
  changeVisitedError: ApolloError | undefined
}

export const useHandleChangeVisited = (): UseHandleChangeVisitedOutput => {
  const [changeVisited, { loading, error }] = useMutation(CHANGE_VISITED)

  const changeVisitedInfo = (id: number, visited: boolean) => {
    changeVisited({
      variables: {
        input: {
          id,
          visited: !visited,
        },
      },
      // update(cache, { data }) {
      //   cache.modify({
      //     id: cache.identify(data.cities), // @todo
      //     fields: {
      //       cities(cachedCities) {
      //         return {
      //           ...cachedCities, {
      //             id,

      //           }
      //         }
      //       },
      //     },
      //   })
      // },
    })
  }

  return { changeVisitedInfo, loadingVisited: loading, changeVisitedError: error }
}
