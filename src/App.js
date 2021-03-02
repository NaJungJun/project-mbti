import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {
    Main,
    Test,
    Result
} from './pages';

const RouteNoMatch = () => {
    return <div>404 NOT FOUND</div>
};

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/test' component={Test} />
                <Route path='/result/:type' component={Result} />
                <Route component={RouteNoMatch} />
            </Switch>
        </>
    );
}

export default App;