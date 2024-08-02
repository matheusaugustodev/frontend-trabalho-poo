import { Button } from "@chakra-ui/react"

export default function AdminFuncionalidades() {
    return (
        <>
            <Button variant='solid' colorScheme='green'>
                Editar
            </Button>
            <Button variant='solid' colorScheme='red'>
                Remover
            </Button>
        </>
    )
}