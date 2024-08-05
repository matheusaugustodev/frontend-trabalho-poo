'use client'
import { createContext, useState } from 'react'

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
    const servidor = 'http://127.0.0.1:8080'
    
    const dados = {
        estoque: {
            nome: 'Estoque de livros',
            tipoItem: 'livro',
            propriedades: [
                {
                    nome: 'Título',
                    codigo: 'titulo'
                },
                {
                    nome: 'Autor',
                    codigo: 'autor',
                    subPropriedades: [
                        {
                            nome: 'Nome',
                            codigo: 'nome'
                        }
                    ]
                },
                {
                    nome: 'Preço',
                    codigo: 'preco'
                },
                {
                    nome: 'Quantidade',
                    codigo: 'quantidade'
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
                },
                {
                    nome: 'Endereço',
                    codigo: 'endereco'
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
                },
                {
                    nome: 'Salário',
                    codigo: 'salario'
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
            quantidade: 1
        },
        {
            titulo: 'A Barraca do Beijo',
            autor: 'Beth Reekles',
            preco: 29.90,
            quantidade: 2
        }
    ]

    const clientes = [
        {
            nome: 'Maria',
            cpf: '123.456.789-10',
            telefone: '(62) 9 9999-9999',
            endereco: 'Rua 1, nº 1'
        }
    ]

    const vendedores = [
        {
            nome: 'João',
            cpf: '123.456.789-11',
            telefone: '(62) 9 9999-9998',
            salario: 2000.00
        }
    ]

    return (
        <GlobalContext.Provider value={{ rotas, livros, clientes, vendedores, dados, servidor }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;