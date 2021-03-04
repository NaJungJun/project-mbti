import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import './styles/animation.scss'
import {
    Main,
    Test,
    Result,
    Makers
} from './pages';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const RouteNoMatch = () => {
    return <div>404 NOT FOUND</div>
};

function App() {
    const location = useLocation();
    // const nodeRef = React.useRef(null);
    return (
        <>
        <TransitionGroup>
            <CSSTransition classNames="fade" key={location.key} timeout={1000}>
            <Switch location={location}>
                <Route exact path='/' component={Main} />
                <Route path='/test' component={Test} />
                <Route path='/makers' component={Makers}/>
                <Route path='/result' component={Result} />
                <Route component={RouteNoMatch} />
            </Switch>
            </CSSTransition>

        </TransitionGroup>
            
        </>
    );
}

export default App;