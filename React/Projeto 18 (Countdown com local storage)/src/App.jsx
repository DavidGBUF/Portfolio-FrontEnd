import Title from './components/Title'
import './App.css'
import Counter from "./components/Counter"
import NewYear from "./assets/newyear.jpg"
import { Outlet } from 'react-router-dom'

import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext'

import useCountdown from './hooks/useCountdown'
function App() {
  
  const {event, getDate,data} = useContext(CountdownContext)

  let object = data

  let eventImage = null
  if(object) eventImage = object.image

  return (
    <div className="App" style={eventImage 
      ?{backgroundImage: `url(${eventImage})`}
      :{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        

        <Outlet/>
      </div>
    </div>
  )
}

export default App
