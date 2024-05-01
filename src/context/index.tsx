import {createContext, useContext, useState} from 'react'

const AppContext = createContext({
    hello:'Hello'
})

export function AppWrapper({children} : {

    children:React.ReactNode

}){
    let [logged,setLogged] = useState()

    return(

        <AppContext.Provider value={logged}>
            {children}
        </AppContext.Provider>
    )

}

export function UseAppContext(){
    return useContext(AppContext)
}