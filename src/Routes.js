import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Main from './components/Main';
import PageTwo from './components/PageTwo/PageTwo';
import Payment from './components/Payment/Payment';
import PersonContextProvider from './context/PersonContext';

const Routes = () => {
    return (
        <PersonContextProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/pros' component={PageTwo} />
                    <Route exact path='/pay' component={Payment} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </PersonContextProvider>
    );
};

export default Routes;