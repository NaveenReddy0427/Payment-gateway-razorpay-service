import React from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"


const PaymentDone = () => {

    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")

  return (
    <Box>
        <VStack h="100vh" justifyContent={"center"}>
            <Heading textTransform={"uppercase"}> Order Successfull</Heading>
            <Text>
                Reference No.{referenceNum}
            </Text>
        </VStack>
    </Box>  
  )
}

export default PaymentDone