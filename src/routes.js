import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home}>
            </Switch>
        </BrowserRouter>
    )
}