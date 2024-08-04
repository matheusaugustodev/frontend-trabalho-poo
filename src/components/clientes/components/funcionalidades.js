import { ButtonGroup, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Funcionalidades() {

    const { tipoAcesso } = useContext(GlobalContext)

    return (
        <ButtonGroup spacing='2' mt='3'>
            <Button variant='solid' colorScheme='red'>
                Remover livro
            </Button>
        </ButtonGroup>
    )
}