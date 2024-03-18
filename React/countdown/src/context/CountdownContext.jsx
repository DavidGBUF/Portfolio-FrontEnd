import { useContext, useState } from "react"
import React from 'react'
import { useFetch } from "../hooks/useFetch"

const CountdownContext = React.createContext(null)

const CountdownProvider = ({children}) => {

    function getDate()  {
        const date = JSON.parse(localStorage.getItem("date") || "a") 
        return date}

    function saveDate(date) {
        localStorage.setItem("date", JSON.stringify(date))
    }

    const atualizarDados= async (novosDados,url) => {
        await fetch(url, {
            method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novosDados),
        }).then((response) => {
            // Verifique o status da resposta
            if (response.ok) {
              console.log('Dados atualizados com sucesso!');
            } else {
              console.log('Erro ao atualizar dados:', response.statusText);
            }
          })
    }

    const getDados = async(url) => {
        const resposta = await fetch(url)
        const dadosAtualizados = await resposta.json()
        
        return dadosAtualizados
    }

    const [event,setEvent] = useState(null)



     const {data,httpConfig} = useFetch("http://localhost:3000/Data")

    return(
        <CountdownContext.Provider value={{event,setEvent,getDate, saveDate, atualizarDados,getDados,data,httpConfig}}>
            {children}
        </CountdownContext.Provider>
    )
}

export {CountdownContext,CountdownProvider}