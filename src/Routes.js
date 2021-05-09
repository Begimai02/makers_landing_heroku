import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Main from './components/Main';
import PageTwo from './components/PageTwo/PageTwo';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/pros' component={PageTwo} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;