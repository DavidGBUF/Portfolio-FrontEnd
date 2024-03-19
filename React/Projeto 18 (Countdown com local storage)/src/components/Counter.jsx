import "./Counter.css"


const counter = ({title,number, eventColor}) => {
  return (
    <div className='counter'>
        <p className='counter-number'  style={{backgroundColor: eventColor}}>{number}</p>
        <h3 className='counter-title'  style={{color: eventColor}}>{title}</h3>
    </div>
  )
}

export default counter