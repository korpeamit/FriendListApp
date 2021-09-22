import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { Provider } from 'react-redux';
import store from '../store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../store'
const AppRouter = () => {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route component={Home} path="/" exact={true} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default AppRouter;
