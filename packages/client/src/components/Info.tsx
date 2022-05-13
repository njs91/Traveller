import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React, { FC, VFC } from 'react'
import LoadingImage from '../images/loading.svg'

export const LoadingSpinner: VFC = () => <img src={LoadingImage} alt="Loading" style={{ margin: '0 auto' }} />

interface ErrorProps {
  msg?: string
}

export const Error: FC<ErrorProps> = ({ msg = 'An error occurred!' }) => (
  <Alert status="error" mt={4}>
    <AlertIcon />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>{msg}</AlertDescription>
  </Alert>
)
