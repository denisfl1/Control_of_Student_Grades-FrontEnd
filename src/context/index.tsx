import {createContext, useContext, useState} from 'react'
import {API} from "@/api/api"

const AppContext = createContext<any>(undefined)

export function AppWrapper({children} : {

    children:React.ReactNode

}){
    let [logged,setLogged] = useState('world')

    const token  = localStorage.getItem('token')

    API.defaults.headers.Authorization = token

    return(

        <AppContext.Provider value={{logged, setLogged}}>
            {children}
        </AppContext.Provider>
    )

}

export function UseAppContext(){
    return useContext(AppContext)
}

// import {useAppContext} from "@/context"
// const {hello} = useAppContext()