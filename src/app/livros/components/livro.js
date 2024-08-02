import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Avatar, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box,
    Tag,
    TagLabel} from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'
import Funcionalidades from './funcionalidades'


export default function Livro({ nome, autor, preco, quantidade, genero }) {

    const { tipoAcesso } = useContext(GlobalContext)

    const generos = [
        {
            nome: 'Ficção',
            codigo: 'FICCAO'
        },
        {
            nome: 'Terror',
            codigo: 'TERROR'
        },
        {
            nome: 'Biografia',
            codigo: 'BIOGRAFIA'
        },
        {
            nome: 'Infantil',
            codigo: 'INFANTIL'
        },
        {
            nome: 'Acadêmico',
            codigo: 'ACADEMICO'
        },
        {
            nome: 'Romance',
            codigo: 'ROMANCE'
        }
    ]

    const nomeGenero = generos.find(item => item.codigo == genero).nome

    const precoFormatado = preco.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <Accordion allowToggle border='1px' borderColor='blue.100' variant='soft-rounded' borderRadius='8px' overflow='auto'>
            <AccordionItem border='hidden'>
                <AccordionButton justifyContent='space-between' >
                    <Stack direction='row' paddingY='1'>
                        <Avatar name={nome} />
                        <Stack spacing='0' textAlign='left'>
                            <Heading size='md'>{nome}</Heading>
                            <Text>{autor}</Text>
                        </Stack>
                    </Stack>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Stack direction='row'>
                        <Stack spacing='2' textAlign='left' mt='2'>
                            <Stack direction='row' alignItems='center'>
                                <Tag size='lg' colorScheme='gray' borderRadius='full'>
                                    <TagLabel>Gênero:</TagLabel>
                                </Tag>
                                <Text>{nomeGenero}</Text>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <Tag size='lg' colorScheme='gray' borderRadius='full'>
                                    <TagLabel>Quantidade:</TagLabel>
                                </Tag>
                                <Text>{quantidade}</Text>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <Tag size='lg' colorScheme='gray' borderRadius='full'>
                                    <TagLabel>Preço:</TagLabel>
                                </Tag>
                                <Text>{precoFormatado}</Text>
                            </Stack>
                            <Funcionalidades />
                        </Stack>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>

        </Accordion>

    )
}