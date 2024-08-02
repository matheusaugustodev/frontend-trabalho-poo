'use client'
import { createContext, useState } from 'react'

export const GlobalContext = createContext({});


function GlobalProvider({ children }) {
    const [tipoAcesso, setTipoAcesso] = useState('user')

    return (
        <GlobalContext.Provider value={{ tipoAcesso, setTipoAcesso }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;