import './index.css'

const EventItem = props => {
  const {eventData, clickEventDetails} = props
  const {imageUrl, name, location, id} = eventData

  const onClickEvent = () => {
    clickEventDetails(id)
  }

  return (
    <li className="event" onClick={onClickEvent}>
      <button type="button" className="event-btn">
        <img src={imageUrl} alt="event" className="event-image" />
        <p className="heading">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
