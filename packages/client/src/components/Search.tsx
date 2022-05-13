import { Search2Icon } from '@chakra-ui/icons'
import { FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { Dispatch, FC } from 'react'

interface SearchProps {
  setSearch: Dispatch<string>
  handleSearch: () => void
}

export const Search: FC<SearchProps> = ({ setSearch, handleSearch }) => (
  <>
    <FormLabel htmlFor="search" w="100%" textAlign="center">
      Search:
    </FormLabel>
    <InputGroup>
      <Input placeholder="Enter a city" type="search" id="search" onChange={e => setSearch(e.target.value)} />
      <InputRightElement onClick={handleSearch} children={<IconButton aria-label="search" icon={<Search2Icon />} />} />
    </InputGroup>
  </>
)
