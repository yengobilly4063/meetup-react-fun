import React, { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavoritesContext from '../store/favorites-context'


const FavoriteMeetups = () => {

  const favoriteCtx = useContext(FavoritesContext)

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You have no favorites.</p>
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />
  }

  return (
    <div>
      <h2>My favorites</h2>
      <hr />
      {content}
    </div>
  )
}

export default FavoriteMeetups
