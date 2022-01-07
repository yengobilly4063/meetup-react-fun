import React, { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import Loading from '../components/ui/Loading'
import { serverUrl } from '../server/server-info'

const AllMeetups = () => {
  const [isLoading, setIsloading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch(`${serverUrl}/meetups.json`).then((response) => {
      return response.json();
    }).then(data => {
      const meetups = Object.keys(data).map(key => {
        return { id: key, ...data[key] }
      })

      setIsloading(false)
      setLoadedMeetups(meetups)
    })
  }, [])



  if (isLoading) {
    return (
      <Loading toggleIsLoading={() => setIsloading(false)} />
    )
  }
  return (
    <div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  )
}

export default AllMeetups

