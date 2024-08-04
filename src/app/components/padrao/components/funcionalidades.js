import { ButtonGroup, Button, useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Funcionalidades({ tipoItem, item }) {

    const { dados, rotas, servidor } = useContext(GlobalContext)

    const nomeItem = dados[tipoItem].tipoItem

    const toast = useToast()

    
    async function removerItem() {
        
        const examplePromise = new Promise(async (resolve, reject) => {
            return setTimeout(() => resolve(200), 5000)
            
            const informacoesRotaParaRemoverItem = rotas[tipoItem].remover
            const id = informacoesRotaParaRemoverItem.id

            const rota = servidor + informacoesRotaParaRemoverItem.rota
            const metodo = informacoesRotaParaRemoverItem.tipo

            const response = await fetch(rota, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ [id]: item[id] })
            })
    
            const data = await response.json()
            console.log(data)

            response.status === 200 ? resolve(response.status) : reject(response.status)
        })

        const nomeItemFormatado = nomeItem[0].toUpperCase() + nomeItem.slice(1)

        toast.promise(examplePromise, {
            success: { title:  nomeItemFormatado + ' removido'},
            error: { title: 'Erro ao remover ' + nomeItem },
            loading: { title: `Removendo ${nomeItem}...` },
        })
           
    }

    return (
        <ButtonGroup spacing='2' mt='3'>
            <Button variant='solid' colorScheme='red' onClick={removerItem}>
                Remover
            </Button>
        </ButtonGroup>
    )
}