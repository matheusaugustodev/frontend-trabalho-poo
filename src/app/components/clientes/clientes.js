
'use client'
import { Stack } from '@chakra-ui/react'
import BotaoAdicionarCliente from './components/botaoAdicionarCliente'
import Cliente from './components/cliente'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Estoque() {

    const [listaClientes, setListaClientes] = useState([])
    const contexto = useContext(GlobalContext)

    useEffect(() => {
        async function getClientes() {
            // const response = await fetch(contexto.rotas.getClientes)
            // const data = await response.json()
            // console.log(data)
            const data = contexto.clientes
            setListaClientes(data)
        }
        getClientes()
    }, [])

    return (
        <>
            <Stack spacing='4'>
                <BotaoAdicionarCliente />
                {
                    listaClientes.map((cliente, index) => (
                        <Cliente nome={cliente.nome} cpf={cliente.cpf} telefone={cliente.telefone} key={index} />
                    ))
                }
            </Stack>
        </>
    )
}