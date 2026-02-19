import './active-day.css'

function ActiveDay(props) {
    return (
        <div className="active-day-container">
            <div className="active-day-title">
                {props.day}
            </div>
            <div className={`active-day-box ${props.active ? 'active' : ''}`} />
        </div>
    )
}

export default ActiveDay;