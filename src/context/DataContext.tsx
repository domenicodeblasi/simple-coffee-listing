import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useSwitch } from "./SwitchContext"

type DataType = never[] | DataItem[]

type DataContextProviderProps = {
    children: ReactNode
}

export type DataItem = {
    id: number,
    name: string,
    image: string,
    price: string,
    rating: number | string | null,
    votes: number,
    popular: boolean,
    available: boolean
  }

const DataContext = createContext<DataType | null>(null)

export const useData = () => {
    return useContext(DataContext)
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {

    const { switchValue } = useSwitch()
    const [data, setData] = useState<DataType>([])
    const [dataToDisplay, setDataToDisplay] = useState<DataType>([])
    const DATA_URL : string = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url)

            if(!response.ok) {
                throw new Error("Error in fetching data")
            }

            const json: object[] = await response.json()
            return json
        } catch(err) {
            console.log(err)
            return []
        }
    }

    useEffect(() => {
        const fetchAndUpdateData = async () => {
            const jsonData = await fetchData(DATA_URL)
            switchValue && setData(jsonData as DataType)
        }
        fetchAndUpdateData()
    }, [])

    useEffect(() => {
        const allProductsData = data
        const availableNowData = allProductsData.filter((item: DataItem) => item.available)
        switchValue === "all-products" ? setDataToDisplay(allProductsData) : setDataToDisplay(availableNowData)
    }, [data, switchValue])

    return (
        <DataContext.Provider value={dataToDisplay}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider