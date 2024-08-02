'use client'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import Livro from './components/livro'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'

const listaLivros = [
    {
        nome: 'É Assim Que Acaba',
        autor: 'Colleen Hoover',
        preco: 39.90,
        descricao: 'Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, mudou para Boston e abriu a própria loja.'
    }
]


export default function Livros() {

    const { tipoAcesso } = useContext(GlobalContext)

    return (
        <>

        {
            listaLivros.map((livro, index) => (
                <Livro nome={livro.nome} autor={livro.autor} preco={livro.preco} descricao={livro.descricao} key={index} />
            ))
        }


        <Card >
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </>
    )
}