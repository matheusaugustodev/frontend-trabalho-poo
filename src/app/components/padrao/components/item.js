import {
    Stack, Heading, Text, Avatar, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Tag,
    TagLabel
} from '@chakra-ui/react'
import Funcionalidades from './funcionalidades'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Item({ item, tipoItem }) {

    const { dados } = useContext(GlobalContext)

    const propriedadePrincipal = dados[tipoItem].propriedadePrincipal
    const valorPropriedadePrincipal = item[propriedadePrincipal]

    const propriedades = dados[tipoItem].propriedades

    const listaPropriedades = []

    for (const propriedade of propriedades) {

        if (propriedade.codigo === propriedadePrincipal) continue

        const nomePropriedade = [...propriedades].find(item => item.codigo === propriedade.codigo).nome

        const objetoParaAdicionar = {
            nome: nomePropriedade,
            valor: item[propriedade.codigo]
        }

        if (propriedade.codigo === 'preco') {
            const precoFormatado = objetoParaAdicionar.valor.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            })   
            objetoParaAdicionar.valor = precoFormatado
        }

        listaPropriedades.push(objetoParaAdicionar)
    }

    return (
        <>
            <Accordion allowToggle border='1px' borderColor='blue.100' variant='soft-rounded' borderRadius='8px' overflow='auto'>
                <AccordionItem border='hidden'>
                    <AccordionButton justifyContent='space-between' >
                        <Stack direction='row' paddingY='1' alignItems='center'>
                            <Avatar name={valorPropriedadePrincipal}/>
                            <Stack textAlign='left'>
                                <Heading size='md'>{valorPropriedadePrincipal}</Heading>
                            </Stack>
                        </Stack>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Stack direction='row'>
                            <Stack spacing='2' textAlign='left' mt='2'>
                                {
                                    listaPropriedades.map(({ nome, valor }, index) => (
                                        <Stack direction='row' alignItems='center' key={index}>
                                            <Tag size='lg' colorScheme='gray' borderRadius='full'>
                                                <TagLabel>{nome}:</TagLabel>
                                            </Tag>
                                            <Text>{valor}</Text>
                                        </Stack>
                                    ))
                                }
                                <Funcionalidades tipoItem={tipoItem} item={item} />
                            </Stack>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </>

    )
}