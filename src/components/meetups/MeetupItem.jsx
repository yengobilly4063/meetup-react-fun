import React, { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import styles from "../styles/MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem = ({ meetup }) => {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(meetup.id);
    } else {
      favoriteCtx.addFavorite(meetup);
    }
    console.log(favoriteCtx.favorites);
    console.log(favoriteCtx.totalFavorites);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={styles.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
