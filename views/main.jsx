'use babel';

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home.jsx';
import VlcSetup from './vlc.jsx';
import NewSeries from './new-series.jsx';
import WatchSeries from './watch-series.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/vlc' component={VlcSetup}/>
                    <Route path='/new-series' component={NewSeries}/>
                    <Route path='/watch-series' component={WatchSeries}/>
                </Switch>
            </main>
        );
    }
}