import React from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'
import useCountdown from '../hooks/useCountdown'
import { CountdownContext } from '../context/CountdownContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'




const CountDown = () => {
    const {event,getDate} = useContext(CountdownContext)

    let object = getDate()
    


    
    // if(!event) return <Navigate to="/"/>

    const eventTitle = object.title
    const eventColor = object.color
    const [day,hour,minute,second] = useCountdown(object.date)

  return (
    <>
        <Title title={eventTitle} eventColor={eventColor}/>
        <div className='countdown-container'>
          <Counter title="Dias" number={day} eventColor={eventColor}/>
          <Counter title="Horas" number={hour} eventColor={eventColor}/>
          <Counter title="Minutos" number={minute} eventColor={eventColor}/>
          <Counter title="Segundos" number={second} eventColor={eventColor}/>
        </div>
    </>
  )
}

export default CountDown