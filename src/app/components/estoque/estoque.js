
'use client'
import { Stack } from '@chakra-ui/react'
import BotaoAdicionarLivro from './components/botaoAdicionarLivro'
import Livro from './components/livro'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Estoque() {

    const [listaLivros, setListaLivros] = useState([])
    const contexto = useContext(GlobalContext)

    useEffect(() => {
        async function getLivros() {
            // const response = await fetch(contexto.rotas.getLivros)
            // const data = await response.json()
            // console.log(data)
            const data = contexto.livros
            setListaLivros(data)
        }
        getLivros()
    }, [])

    return (
        <>
            <Stack spacing='4'>
                <BotaoAdicionarLivro />
                {
                    listaLivros.map((livro, index) => (
                        <Livro titulo={livro.titulo} autor={livro.autor} preco={livro.preco} quantidade={livro.quantidade} genero={livro.genero} key={index} />
                    ))
                }
            </Stack>
        </>
    )
}