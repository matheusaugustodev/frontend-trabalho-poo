'use client'
import { createContext, useState } from 'react'

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
    const [tipoAcesso, setTipoAcesso] = useState('estoque')
    const servidor = 'http://localhost:8080'
    
    const generos = [
        {
            nome: 'Ficção',
            codigo: 'FICCAO'
        },
        {
            nome: 'Terror',
            codigo: 'TERROR'
        },
        {
            nome: 'Biografia',
            codigo: 'BIOGRAFIA'
        },
        {
            nome: 'Infantil',
            codigo: 'INFANTIL'
        },
        {
            nome: 'Acadêmico',
            codigo: 'ACADEMICO'
        },
        {
            nome: 'Romance',
            codigo: 'ROMANCE'
        }
    ]

    generos.sort((a, b) => a.nome.localeCompare(b.nome))

    const dados = {
        estoque: {
            nome: 'Estoque de livros',
            tipoItem: 'livro',
            // propriedades: ['titulo', 'autor', 'preco', 'quantidade', 'genero'],
            propriedades: [
                {
                    nome: 'Título',
                    codigo: 'titulo'
                },
                {
                    nome: 'Autor',
                    codigo: 'autor'
                },
                {
                    nome: 'Preço',
                    codigo: 'preco'
                },
                {
                    nome: 'Quantidade',
                    codigo: 'quantidade'
                },
                {
                    nome: 'Gênero',
                    codigo: 'genero'
                }
            ],
            propriedadePrincipal: 'titulo',
        },
        cliente: {
            nome: 'Clientes',
            tipoItem: 'cliente',
            propriedades: [
                {
                    nome: 'Nome',
                    codigo: 'nome'
                },
                {
                    nome: 'CPF',
                    codigo: 'cpf'
                },
                {
                    nome: 'Telefone',
                    codigo: 'telefone'
                }
            ],
            propriedadePrincipal: 'nome',
        },
        vendedor: {
            nome: 'Vendedores',
            tipoItem: 'vendedor',
            propriedades: [
                {
                    nome: 'Nome',
                    codigo: 'nome'
                },
                {
                    nome: 'CPF',
                    codigo: 'cpf'
                },
                {
                    nome: 'Telefone',
                    codigo: 'telefone'
                }
            ],
            propriedadePrincipal: 'nome',
        }
    }

    const rotas = {
        estoque: {
            lista: {
                tipo: 'get',
                rota: '/estoque'
            },
            adicionar: {
                tipo: 'post',
                rota: '/adicionaLivro',
                id: 'id'
            },
            remover: {
                tipo: 'post',
                rota: '/removeLivro',
                id: 'id'
            }
        },
        cliente: {
            lista: {
                tipo: 'get',
                rota: '/clientes'
            },
            adicionar: {
                tipo: 'post',
                rota: '/adicionaCliente',
                id: 'cpf'
            },
            remover: {
                tipo: 'post',
                rota: '/removeCliente',
                id: 'cpf'
            }
        },
        vendedor: {
            lista: {
                tipo: 'get',
                rota: '/vendedores'
            },
            adicionar: {
                tipo: 'post',
                rota: '/adicionaVendedor',
                id: 'cpf'
            },
            remover: {
                tipo: 'post',
                rota: '/removeVendedor',
                id: 'cpf'
            }
        }
    }

    const livros = [
        {
            titulo: 'É Assim Que Acaba',
            autor: 'Colleen Hoover',
            preco: 39.90,
            quantidade: 1,
            genero: generos[5].codigo
        },
        {
            titulo: 'A Barraca do Beijo',
            autor: 'Beth Reekles',
            preco: 29.90,
            quantidade: 2,
            genero: generos[5].codigo
        }
    ]

    const clientes = [
        {
            nome: 'Maria',
            cpf: '123.456.789-10',
            telefone: '(62) 9 9999-9999',
        }
    ]

    const vendedores = [
        {
            nome: 'João',
            cpf: '123.456.789-11',
            telefone: '(62) 9 9999-9998',
        }
    ]

    return (
        <GlobalContext.Provider value={{ tipoAcesso, setTipoAcesso, rotas, livros, clientes, vendedores, dados, generos }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;