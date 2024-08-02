import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Avatar } from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'
import AdminFuncionalidades from './admin_funcionalidades'
import UserFuncionalidades from './user_funcionalidades'

export default function Livro({ nome, autor, preco, descricao }) {

    const { tipoAcesso } = useContext(GlobalContext)
    // tipoAcesso: admin ou user

    const precoFormatado = preco.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
    })


    return (
        <Card mb='5'>
            <CardBody>
                <Stack direction='row'>
                    <Avatar name={nome} />
                    <Stack spacing='0'>
                        <Heading size='md'>{nome}</Heading>
                        <Text>{autor}</Text>
                    </Stack>
                </Stack>
                <Stack mt='4' spacing='3'>
                    <Text>{descricao}</Text>
                    <Text color='blue.600' fontSize='2xl'>{precoFormatado}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    {
                        tipoAcesso === 'admin' ?
                            <AdminFuncionalidades />
                            :
                            <UserFuncionalidades />
                    }
                    
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}