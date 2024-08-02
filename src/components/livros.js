
'use client'
import Livro from '@/app/livros/components/livro'
import { Stack } from '@chakra-ui/react'

const generos = ['FICCAO', 'TERROR', 'BIOGRAFIA', 'INFANTIL', 'ACADEMICO', 'ROMANCE']

const listaLivros = [
    {
        nome: 'É Assim Que Acaba',
        autor: 'Colleen Hoover',
        preco: 39.90,
        quantidade: 1,
        genero: generos[5]
    },
    {
        nome: 'A Barraca do Beijo',
        autor: 'Beth Reekles',
        preco: 29.90,
        quantidade: 2,
        genero: generos[5]
    }
]

export default function Livros() {

    return (
        <>
            <Stack spacing='4'>
                {
                    listaLivros.map((livro, index) => (
                        <Livro nome={livro.nome} autor={livro.autor} preco={livro.preco} quantidade={livro.quantidade} genero={livro.genero} key={index} />
                    ))
                }
            </Stack>
        </>
    )
}