import React from 'react'
import type { FC } from 'react'
import { ChakraProvider, Box, extendTheme, ColorModeProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { TopBar } from './TopBar'
import { Home } from './Home'
import { WishList } from './WishList'
import { Visited } from './Visited'

const fonts = {
  heading:
    '"Museo Sans", museo-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body: '"Lato", lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  // chakra default
  mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

export const App: FC = () => (
  <ChakraProvider theme={extendTheme({ fonts })}>
    <ColorModeProvider options={{ initialColorMode: 'light' }}>
      <TopBar />
      <Box textAlign="center">
        <Routes>
          <Route index element={<Home />} />
          <Route path="wish-list" element={<WishList />} />
          <Route path="visited" element={<Visited />} />
        </Routes>
      </Box>
    </ColorModeProvider>
  </ChakraProvider>
)
