
'use client'
import { Stack } from '@chakra-ui/react'
import BotaoAdicionarItem from './components/botaoAdicionarItem'
import Item from './components/item'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Lista({ tipoItem }) {

    const [listaDeItens, setListaLivros] = useState([])
    const { dados, servidor, rotas } = useContext(GlobalContext)

    useEffect(() => {
        async function getItens() {

            const informacoesRota = rotas[tipoItem].lista
            const rota = servidor + informacoesRota.rota

            const response = await fetch(rota)

            if (response.status === 200) {
                const data = await response.json()
                setListaLivros(data)                
            } else {
                console.error('Erro ao buscar itens')
            }

        }
        getItens()
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