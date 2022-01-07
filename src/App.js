
import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import MainLayout from './components/layout/MainLayout';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetups from './pages/AllMeetups';
import FavoriteMeetups from './pages/FavoriteMeetups';
import NewMeetups from './pages/NewMeetups';

function App() {
  return (
    <div>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={AllMeetups} />
          <Route path="/favorites" exact component={FavoriteMeetups} />
          <Route path="/new-meetup" exact component={NewMeetups} />
          <Redirect to="/" from="*" />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
