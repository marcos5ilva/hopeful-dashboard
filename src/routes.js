import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

const Routes = () => {

    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/dashboard" component={Dashboard} />

        </BrowserRouter>
    );
}

export default Routes;