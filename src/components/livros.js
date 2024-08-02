
'use client'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'
import Livro from '@/app/livros/components/livro'

const listaLivros = [
    {
        nome: 'É Assim Que Acaba',
        autor: 'Colleen Hoover',
        preco: 39.90,
        descricao: 'Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, mudou para Boston e abriu a própria loja.'
    },
    {
        nome: 'A Barraca do Beijo',
        autor: 'Beth Reekles',
        preco: 29.90,
        descricao: 'Elle Evans é o que toda garota sonha em ser: popular, bonita e inteligente. Mas ela nunca foi beijada. Noah Flynn é lindo',
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
        </>
    )
}