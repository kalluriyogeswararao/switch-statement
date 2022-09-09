import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  alreadyRegisteredEvent = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="status">You have already registered for the event</h1>
    </div>
  )

  registerEvent = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p className="status">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  registrationsClosed = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="register-image"
      />
      <h1 className="status">Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen</p>
      <p className="para">the Registrations soon!</p>
    </div>
  )

  initialStatus = () => (
    <div className="register-container">
      <p className="initial">
        Click on an event, to view its
        <br /> registration details
      </p>
    </div>
  )

  getStatusDetails = () => {
    const {eventStatus} = this.props
    switch (eventStatus.registrationStatus) {
      case 'YET_TO_REGISTER':
        return this.registerEvent()

      case 'REGISTERED':
        return this.alreadyRegisteredEvent()

      case 'REGISTRATIONS_CLOSED':
        return this.registrationsClosed()

      case 'INITIAL':
        return this.initialStatus()

      default:
        return null
    }
  }

  render() {
    return <>{this.getStatusDetails()}</>
  }
}

export default ActiveEventRegistrationDetails
