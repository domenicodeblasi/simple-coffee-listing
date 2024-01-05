import React, { createContext, useContext, useState, ReactNode } from "react"

type SwitchContextType = {
    switchValue: SwitchType,
    toggleSwitch?: (value: SwitchType) => void
}

export type SwitchType = "all products" | "available now"

type SwitchContextProviderProps = {
    children: ReactNode
}

const SwitchContext = createContext<SwitchContextType>({ switchValue: "all products" })

export const useSwitch = () => {
    return useContext(SwitchContext)
}

const SwitchContextProvider: React.FC<SwitchContextProviderProps> = ({ children }) => {

    const [switchValue, setSwitchValue] = useState<SwitchType>("all products")

    const toggleSwitch = (value: SwitchType) => {
        setSwitchValue(value)
    }

    const valueObj: SwitchContextType = {
        switchValue,
        toggleSwitch
    }

    return (
        <SwitchContext.Provider value={valueObj}>
            {children}
        </SwitchContext.Provider>
    )
}

export default SwitchContextProvider