import React from 'react'

interface ContextType {
    className: boolean;
    setClassName: React.Dispatch<React.SetStateAction<boolean>>
}

export const Contexts = React.createContext<ContextType>({
    className: false, 
    setClassName: () => true
})