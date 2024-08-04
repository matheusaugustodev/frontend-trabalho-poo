
'use client'
import { Stack } from '@chakra-ui/react'
import BotaoAdicionarItem from './components/botaoAdicionarItem'
import Item from './components/item'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Lista({ tipoItem }) {

    const [listaDeItens, setListaLivros] = useState([])
    const { dados, tipoAcesso, livros, clientes, vendedores } = useContext(GlobalContext)

    useEffect(() => {
        async function getLivros() {
            // const response = await fetch(contexto.rotas.getLivros)
            // const data = await response.json()
            // console.log(data)
            const data = tipoItem === 'estoque' ? livros : tipoItem === 'cliente' ? clientes : vendedores
            setListaLivros(data)
        }
        getLivros()
    }, [])

    return (
        <>
            <Stack spacing='4'>
                <BotaoAdicionarItem tipoItem={tipoItem}/>
                {
                    listaDeItens.map((item, index) => (
                        <Item item={item} tipoItem={tipoItem} key={index} />
                    ))
                }
            </Stack>
        </>
    )
}