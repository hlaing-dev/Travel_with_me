import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeContainer from '../Home/Container/Homecontainer';
import Destination from '../Destination/destination';
import Tours from '../Tours/Container/tour';
import About from '../About/Container/AboutContainer'

const Routing = props => {
    const { } = props
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/destination' exact component={Destination} />
            <Route path='/tour' exact component={Tours} />
            <Route path='/about' exact component={About} />
            <Redirect to='/' />
        </Switch>
    )
}

export default Routing