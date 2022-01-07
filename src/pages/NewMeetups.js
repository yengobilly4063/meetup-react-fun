import React from 'react'
import { useHistory } from "react-router-dom"
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { serverUrl } from '../server/server-info'

const NewMeetups = () => {

  const history = useHistory()

  const handleAddMeetup = async (meetupData) => {
    fetch(`${serverUrl}/meetups.json`,
      {
        method: "POST", body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        history.replace("/")
      })
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onMeetupAdd={handleAddMeetup} />
    </section>
  )
}

export default NewMeetups
