import "./Home.css"
import { useContext, useEffect, useState } from "react"

import { CountdownContext } from "../context/CountdownContext"

import { useNavigate } from "react-router-dom"

const url= "http://localhost:3000/Data"




const Home = () => {

    const [title,setTitle] = useState()
    const [date,setDate] = useState()
    const [image,setImage] = useState()
    const [color,setColor] = useState()

    const {event, setEvent, saveDate,getDate,atualizarDados,getDados,data} = useContext(CountdownContext)

    let object = getDate()

   
    

    

    const navigate = useNavigate()

    const handlerSubmit = (e) => {
        e.preventDefault()
        const eventObject = {
            title,
            date,
            image,
            color
        }

        
        atualizarDados(eventObject,url)
        console.log(data)
        
        
        
        
        

        
        
            
        setEvent(eventObject)
        saveDate(eventObject)
        navigate("/countdown")
        
        

    }

    

    
  return (
    <div className='home'>
        <h2>Monte a sua contagem regressiva!</h2>
        <form 
        className="countdown-form" onSubmit={handlerSubmit}>

            <label >
                <span>Título:</span>
                <input type="text" name='tittle'  
                placeholder='Digite o título do evento'
                onChange={(e) => setTitle(e.target.value)}
                required/>
            </label>

            <label >
                <span>Data:</span>
                <input type="date" name='date' 
                onChange={(e) => setDate(e.target.value)}
                required 
                />
            </label>

            <label >
                <span>Imagem:</span>
                <input type="text" name='image'  
                placeholder='Insira o URL da imagem'
                onChange={(e) => setImage(e.target.value)}
                />
            </label>

            <label >
                <span>Cor do tema:</span>
                <input type="color" name='color' 
                onChange={(e) => setColor(e.target.value)}
                required 
                />
            </label>

            <div className="final">
            <input type="submit" value="Enviar" />

            {object !=="a" && <button onClick={() => navigate("/countdown")}>Avançar para data já existente</button>}
            </div>

            
        </form>
    </div>
  )
}

export default Home