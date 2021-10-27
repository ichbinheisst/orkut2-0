import React from "react"

export const GlobalContext = React.createContext()
 export function GlobalStorage({children}){
     
    const [token,setToken] = React.useState()
    const [user,setUser] = React.useState([])

    React.useEffect(()=>{

    },[setToken])
   return (
     <GlobalContext.Provider value={{token,setToken,user,setUser}}> 
      {children} 
      </GlobalContext.Provider>
   )

 } 