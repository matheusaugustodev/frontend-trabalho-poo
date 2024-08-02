import { ButtonGroup } from '@chakra-ui/react'
import AdminFuncionalidades from './admin_funcionalidades'
import UserFuncionalidades from './user_funcionalidades'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global'

export default function Funcionalidades() {

    const { tipoAcesso } = useContext(GlobalContext)

    return (
        <ButtonGroup spacing='2' mt='3'>
            {
                tipoAcesso === 'admin' ?
                    <AdminFuncionalidades />
                    :
                    <UserFuncionalidades />
            }
        </ButtonGroup>
    )
}