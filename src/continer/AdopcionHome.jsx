import React from 'react'
import { Flex, Heading,Text } from "@chakra-ui/react"
import CategorieList from '../components/CategorieList'
import CategorieItem from '../components/CategorieItem'

const AdopcionHome = () => {
    return (
        <Flex direction="column" mt="2" alignItems="center">
            <Heading mt="5" mb="5">
                Adopta una mascota
            </Heading>
            <Text>Categorías de mascotas</Text>
           
            <CategorieItem />
            <CategorieList />
        </Flex>
    )
}

export default AdopcionHome
