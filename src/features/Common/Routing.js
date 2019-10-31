import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeContainer from '../Home/Container/Homecontainer';
import Destination from '../Destination/destination';
import Tours from '../Tours/Container/tour';
import Tourdetail from '../Tours/Container/tourDetail';
import About from '../About/Container/AboutContainer'

const Routing = props => {
    console.log("props routing is=>",props);
    console.log("history is=....",props.history);
    const { } = props
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/destination' exact component={Destination} />
            <Route path='/tour' exact component={Tours} />
            <Route path='/tour/:id' exact component={Tourdetail} />
            <Route path='/about' exact component={About} />
            <Redirect to='/' />
        </Switch>
    )
}

export default Routing